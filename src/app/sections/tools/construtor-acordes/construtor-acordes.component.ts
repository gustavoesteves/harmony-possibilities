import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IInstruments } from 'src/app/services/interfaces/instruments.interface';
import { Instruments } from 'src/app/services/db/instruments.db';
import { findFingerings } from 'chord-fingering';
import { DrawService } from 'src/app/services/draw.service';
import { ChordBox } from 'vexchords';

@Component({
  selector: 'app-construtor-acordes',
  templateUrl: './construtor-acordes.component.html',
  styleUrls: ['./construtor-acordes.component.css']
})
export class ConstrutorAcordesComponent implements OnInit {
  @ViewChild('drawChordsChart', { static: true }) divDrawChordsChart: ElementRef;
  instruments: IInstruments[] = Instruments;
  instrument: IInstruments = Instruments[0];
  // notas checadas
  checkedNotes = [
    { note: 'C', checked: false, value: 0 },
    { note: 'C#', checked: false, value: 0 },
    { note: 'Db', checked: false, value: 0 },
    { note: 'D', checked: false, value: 0 },
    { note: 'D#', checked: false, value: 0 },
    { note: 'Eb', checked: false, value: 0 },
    { note: 'E', checked: false, value: 0 },
    { note: 'F', checked: false, value: 0 },
    { note: 'F#', checked: false, value: 0 },
    { note: 'Gb', checked: false, value: 0 },
    { note: 'G', checked: false, value: 0 },
    { note: 'G#', checked: false, value: 0 },
    { note: 'Ab', checked: false, value: 0 },
    { note: 'A', checked: false, value: 0 },
    { note: 'A#', checked: false, value: 0 },
    { note: 'Bb', checked: false, value: 0 },
    { note: 'B', checked: false, value: 0 },
  ];
  notesTriade = [];

  constructor(private drawService: DrawService) { }

  ngOnInit(): void {
  }

  gravaValor(status: boolean, note: string) {
    if (status) {
      let max = Math.max.apply(Math, this.checkedNotes.map(function (o) { return o.value; })) + 1;
      this.checkedNotes.find(value => value.note === note).value = max;
    }
    else { this.checkedNotes.find(value => value.note === note).value = 0; }
  }

  gerarAcorde() {
    this.notesTriade.length = 0;
    for (const item of this.checkedNotes.filter(item => item.value > 0).sort((a, b) => { return a.value - b.value })) {
      this.notesTriade.push(item.note);
    }
    this.drawChords();
  }

  onSelectInstrument(item: string): void {
    this.instrument = Instruments.find(value => value.Name === item);
    // montando acorde
    // this.drawChords();
  }

  drawChords() {
    // const notesTriade = this.drawService.GetNotes(this.acorde);
    this.FindAndDrawChords(this.notesTriade, this.notesTriade[0], this.divDrawChordsChart.nativeElement);
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
        if (count < 24) {
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
