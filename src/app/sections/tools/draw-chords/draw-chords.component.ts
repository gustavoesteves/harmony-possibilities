import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from '../../../services/tonal.service';
import { IInstruments } from '../../../services/interfaces/instruments.interface';
import { findFingerings } from 'chord-fingering';
import { ChordBox } from 'vexchords';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';
import { Instruments } from 'src/app/services/db/instruments.db';
import { DrawService } from 'src/app/services/draw.service';

@Component({
  selector: 'app-draw-chords',
  templateUrl: './draw-chords.component.html',
  styleUrls: ['./draw-chords.component.css']
})
export class DrawChordsComponent implements OnInit {
  @ViewChild('drawChordsChart', { static: true }) divDrawChordsChart: ElementRef;
  instrument: IInstruments;
  instruments: IInstruments[] = [];
  menuAcordes = [];
  acorde = '';
  btnAcorde = 'button primary small';
  btnFuncao = 'button small';
  menuAtivo = 'acorde';
  checkedNotes = [];

  constructor(private tonalService: TonalService, private drawService: DrawService) {
  }

  ngOnInit(): void {
    this.tonalService.currentInstrument.subscribe(value => {
      this.instrument = value[value.length - 1];
    });
    this.tonalService.currentChord.subscribe(value => {
      this.InitializationChords(value[value.length - 1]);
    });
    this.instruments = Instruments;
  }

  changeView(ativo: string) {
    this.menuAtivo = ativo;
    if (ativo === 'acorde') {
      this.btnFuncao = 'button small';
      this.btnAcorde = 'button primary small';
    }
    else if (ativo === 'funcao') {
      this.btnFuncao = 'button primary small';
      this.btnAcorde = 'button small';
    }
  }

  onSelectInstrument(item: string): void {
    this.tonalService.pushInstrument(item);
    // montando acorde
    this.drawChords();
  }

  gravaValor(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedNotes.map(function (o) { return o.value; })) + 1;
      this.checkedNotes.find(value => value.note === note).value = max;
    }
    else { this.checkedNotes.find(value => value.note === note).value = 0; }
  }

  InitializationChords(value: INoteExtended) {
    if (value != null) {
      // montando menu
      this.acorde = value.Acordes[0];
      this.menuAcordes.length = 0;
      for (let index = 0; index < value.Acordes.length - 1; index++) {
        this.menuAcordes.push(value.Acordes[index]);
      }
      // montando acorde
      this.drawChords();
      // montando as notas de funções harmonicas
      this.montaNotasFuncao(value);
    }
  }

  montaNotasFuncao(value: INoteExtended) {
    this.checkedNotes.length = 0;
    for (const nota of value.Notas) {
      this.checkedNotes.push({ note: nota, checked: false, value: 0 });
    }
    for (const extencao of value.Extenções) {
      this.checkedNotes.push({ note: extencao, checked: false, value: 0 });
    }
  }

  drawChords() {
    const notesTriade = this.drawService.GetNotes(this.acorde);
    this.FindAndDrawChords(notesTriade, notesTriade[0], this.divDrawChordsChart.nativeElement);
  }

  onSelect(item: string): void {
    this.acorde = item;
    this.drawChords();
  }

  FindAndDrawChords(notes: string[], bass: string, selector: any) {
    selector.innerHTML = '';
    let findsChords: string[] = [];
    findsChords.push(findFingerings(notes, [], bass, this.instrument.Notes));

    // verificando se quantidade de acordes esta muito baixa para retirar a quinta    
    if (findsChords[0].length < 10 && notes.length > 3) {
      let quintaFora: string[] = [];
      let contaQuinta = 0;
      for (const note of notes) {
        if (contaQuinta !== 2) { quintaFora.push(note); }
        contaQuinta++;
      }
      findsChords.push(findFingerings(quintaFora, [], bass, this.instrument.Notes));
    }
    // imprimindo acordes na tela
    let count = 0;
    for (let i = 0; i < findsChords.length; i++) {
      for (let j = 0; j < findsChords[i].length; j++) {
        if (count < 21) {
          const chordTranslate = this.drawService.GetTranslate(findsChords[i][j]);
          new ChordBox(selector, {
            numStrings: this.instrument.NumStrings,
            numFrets: 5
          }).draw({
            chord: chordTranslate.Chord,
            position: chordTranslate.Position,
            tuning: this.instrument.Notes
          });
        }
        count++;
      }
    }
  }

}
