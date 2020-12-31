import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from '../../../services/tonal.service';
import { IInstruments } from '../../../services/interfaces/instruments.interface';
import { findFingerings } from 'chord-fingering';
import { ChordBox } from 'vexchords';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';
import { Instruments } from 'src/app/services/db/instruments.db';
import { DrawService } from 'src/app/services/draw.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';

@Component({
  selector: 'app-draw-chords',
  templateUrl: './draw-chords.component.html',
  styleUrls: ['./draw-chords.component.css']
})
export class DrawChordsComponent implements OnInit {
  @ViewChild('drawChordsChart', { static: true }) divDrawChordsChart: ElementRef;
  instrument: IInstruments;
  instruments: IInstruments[] = [];
  chord: INotes;
  acorde = '';
  checkedNotes = [];
  checkedExtencoes = [];
  notesTriade = [];
  baixo = '';

  constructor(private tonalService: TonalService, private drawService: DrawService) {
    this.tonalService.currentInstrument.subscribe(value => {
      this.instrument = value[value.length - 1];
    });
    this.tonalService.currentChord.subscribe(value => {
      this.chord = value[value.length - 1]; 
      this.InitializationChords(this.chord);
    });
    this.instruments = Instruments;
  }

  ngOnInit(): void {
  }

  InitializationChords(value: INotes) {
    if (value != null) {
      // montando menu
      this.acorde = value.Acorde[0];
      // montando acorde
      if (this.MontandoCheckBox(value)) {
        this.drawChords();
      }
    }
  }

  MontandoCheckBox(value: INotes): Boolean {
    let count = 1;
    for (const nota of value.Notas) {
      if (nota !== ',') {
        this.notesTriade.push({ note: nota, checked: true, value: count });
        count++;
      }
    }
    count = 1;
    for (const nota of value.NotasExtendidas) {
      if (nota !== ',') {
        this.checkedExtencoes.push({ note: nota, checked: false, value: count });
        count++;
      }
    }
    return true;
  }

  onSelectInstrument(item: string): void {
    this.tonalService.pushInstrument(item);
    // montando acorde
    this.drawChords();
  }

  onSelectBaixo(item: string): void {
    this.baixo = item;
    this.drawChords();
  }

  gravaValor(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedNotes.map(function (o) { return o.value; })) + 1;
      this.checkedNotes.find(value => value.note === note).value = max;
    }
    else { this.checkedNotes.find(value => value.note === note).value = 0; }
    this.gerarAcorde();
  }

  gerarAcorde() {
    this.notesTriade.length = 0;
    for (const item of this.checkedNotes.filter(item => item.value > 0).sort((a, b) => { return a.value - b.value })) {
      this.notesTriade.push(item.note);
    }
    this.drawChords();
  }

  drawChords() {
    // const notesTriade = this.drawService.GetNotes(this.acorde);
    this.FindAndDrawChords(this.notesTriade, this.baixo, this.divDrawChordsChart.nativeElement);
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
