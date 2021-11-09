import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from '../../../services/tonal.service';
import { IInstruments } from '../../../services/interfaces/instruments.interface';
import { findFingerings } from 'chord-fingering';
import { ChordBox } from 'vexchords';
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
  valueAcorde: INotes;
  menuAcordes = [];
  menuBass = [];
  baixo = '';
  notesTriade = [];
  acorde = '';
  checkedNotes: ICheckedNotes[] = [];
  checkedExtencoes: ICheckedNotes[] = [];
  menuAtivo = '';
  btnNotas = 'button primary small';
  btnIntervalos = 'button small';

  constructor(private tonalService: TonalService, private drawService: DrawService) {
    this.tonalService.currentInstrument.subscribe(value => {
      this.instrument = value[value.length - 1];
    });
    this.tonalService.currentChord.subscribe(value => {
      this.valueAcorde = value[value.length - 1];
      this.InitializationChords(value[value.length - 1]);
    });
    this.instruments = Instruments;
  }

  ngOnInit(): void {
  }

  onSelectInstrument(item: string): void {
    this.tonalService.pushInstrument(item);
    // montando acorde
    this.FindAndDrawChords();
  }

  onSelectBass(item: string): void {
    this.baixo = item;
    // montando notas
    this.menuBass.length = 0;
    this.checkedNotes.length = 0;
    let count = 1;
    for (const item of this.valueAcorde.Notas.split(', ')) {
      this.menuBass.push(item);
      if (item !== this.baixo) {
        this.checkedNotes.push({ note: item, checked: true, value: count++ });
      }
    }
    // montando acorde
    this.FindAndDrawChords();
  }

  gravaValor(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedNotes.map(function (o) { return o.value; })) + 1;
      this.checkedNotes.find(value => value.note === note).value = max;
    }
    else {
      this.checkedNotes.find(value => value.note === note).value = 0;
    }
    this.FindAndDrawChords();
  }

  geraValorExtencoes(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedExtencoes.map(function (o) { return o.value; })) + 1;
      this.checkedExtencoes.find(value => value.note === note).value = max;
    }
    else {
      this.checkedExtencoes.find(value => value.note === note).value = 0;
    }
    this.FindAndDrawChords();
  }

  InitializationChords(value: INotes) {
    if (value != null) {
      // montando menu
      // menu baixo
      this.menuBass.length = 0;
      this.checkedNotes.length = 0;
      this.checkedExtencoes.length = 0;
      let count = 1;
      for (const item of value.Notas.split(', ')) {
        if (count === 1) {
          this.baixo = item;        
          this.acorde = item;
        }
        this.menuBass.push(item);
        if (item !== this.baixo) {
          this.checkedNotes.push({ note: item, checked: true, value: count++ });
        }
        count++;
      }
      for (const item of value.NotasExtendidas.split(', ')) {
        this.checkedExtencoes.push({ note: item, checked: false, value: 0 });
      }
      // montando acorde
      this.FindAndDrawChords();
      // montando as notas de funções harmonicas
      //this.montaNotasFuncao(value);
    }
  }

  getTriade(): string[] {
    let notesTriade = [];
    notesTriade.push(this.baixo);
    for (const item of this.checkedNotes) {
      if (item.checked) {
        notesTriade.push(item.note);
      }
    }
    for (const item of this.checkedExtencoes) {
      if (item.checked) {
        notesTriade.push(item.note);
      }
    }
    return notesTriade;
  }

  FindAndDrawChords() {
    this.divDrawChordsChart.nativeElement.innerHTML = '';
    let findsChords: string[] = [];
    let notes = this.getTriade();
    findsChords.push(findFingerings(this.getTriade(), [], this.baixo, this.instrument.Notes));

    // verificando se quantidade de acordes esta muito baixa para retirar a quinta    
    if (findsChords[0].length < 10 && notes.length > 3) {
      let quintaFora: string[] = [];
      let contaQuinta = 0;
      for (const note of notes) {
        if (contaQuinta !== 2) { quintaFora.push(note); }
        contaQuinta++;
      }
      findsChords.push(findFingerings(quintaFora, [], this.baixo, this.instrument.Notes));
    }
    // imprimindo acordes na tela
    let count = 0;
    for (let i = 0; i < findsChords.length; i++) {
      for (let j = 0; j < findsChords[i].length; j++) {
        if (count < 21) {
          const chordTranslate = this.drawService.GetTranslate(findsChords[i][j]);
          new ChordBox(this.divDrawChordsChart.nativeElement, {
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

  changeView(ativo: string){
    this.menuAtivo = ativo;
    if (ativo === 'intervalos') {
      this.btnNotas = 'button small';
      this.btnIntervalos = 'button primary small';
    }
    else if (ativo === 'notas') {
      this.btnNotas = 'button primary small';
      this.btnIntervalos = 'button small';
    }
  }
}

interface ICheckedNotes {
  note: string;
  checked: boolean;
  value: number;
}
