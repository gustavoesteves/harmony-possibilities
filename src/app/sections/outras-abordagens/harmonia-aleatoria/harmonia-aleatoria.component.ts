import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Chord } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { TonalService } from '../../../services/tonal.service';

@Component({
  selector: 'app-harmonia-aleatoria',
  templateUrl: './harmonia-aleatoria.component.html',
  styleUrls: ['./harmonia-aleatoria.component.css']
})
export class HarmoniaAleatoriaComponent implements OnInit {
  header = ['Compasso', 'Acorde'];
  body: Body[] = [];
  compassos = 4;
  tom = [
    { key: 'C' },
    { key: 'C#' },
    { key: 'Db' },
    { key: 'D' },
    { key: 'D#' },
    { key: 'Eb' },
    { key: 'E' },
    { key: 'F' },
    { key: 'F#' },
    { key: 'Gb' },
    { key: 'G' },
    { key: 'G#' },
    { key: 'Ab' },
    { key: 'A' },
    { key: 'A#' },
    { key: 'Bb' },
    { key: 'B' },
  ];
  chordTypes = [
    { type: '' },
    { type: 'm' },
    { type: '7' },
    { type: 'dim' },
    { type: 'dim7' },
    { type: 'aug' },
    { type: 'sus2' },
    { type: 'sus4' },
    { type: 'maj7' },
    { type: 'm7' },
    { type: '7sus4' },
    { type: 'maj9' },
    { type: 'maj11' },
    { type: 'maj13' },
    { type: 'maj9#11' },
    { type: 'maj13#11' },
    { type: 'add9' },
    { type: '6add9' },
    { type: 'maj7b5' },
    { type: 'maj7#5' },
    { type: 'm6' },
    { type: 'm9' },
    { type: 'm11' },
    { type: 'm13' },
    { type: 'madd9' },
    { type: 'm6add9' },
    { type: 'm/maj7' },
    { type: 'mMaj9' },
    { type: 'm7b5' },
    { type: 'm7#5' },
    { type: '6' },
    { type: '9' },
    { type: '11' },
    { type: '13' },
    { type: '7b5' },
    { type: '7#5' },
    { type: '7b9' },
    { type: '7#9' },
    { type: '7(b5 b9)' },
    { type: '7(b5 #9)' },
    { type: '7#5b9' },
    { type: '7(#5 #9)' },
    { type: '9b5' },
    { type: '9#5' },
    { type: '13#11' },
    { type: '13b9' },
    { type: '11b9' },
    { type: 'sus4add9' },
  ];

  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.body = [];
    for (let index = 0; index < this.compassos; index++) {
      const chord = this.tom[Math.floor(Math.random() * this.tom.length)].key +
        this.chordTypes[Math.floor(Math.random() * this.chordTypes.length)].type;
      let notas = '';
      let extencoes = '';
      let count = 1;
      for (const iterator of Chord.get(chord).notes) {
        if (count > 3) {
          extencoes += iterator + ', ';
        } else{
          notas += iterator + ', ';
        }
        count++;
      };
      notas = notas.substring(0, notas.length - 2);
      extencoes = extencoes.substring(0, extencoes.length - 2);
      this.body.push({
        Compasso: index + 1,
        Acorde: {
          Grau: 'I',
          Acorde: chord,
          Notas: notas,
          Escalas: '',
          Extenções: '',
          NotasExtendidas: extencoes,
          Cadência: ''
        }
      });
    }
  }

  changeCompasso(value: number) {
    this.compassos = value;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }
}

interface Body {
  Compasso: number,
  Acorde: INotes
};
function value(value: any, any: any, index: number, arg3: (number: any) => void) {
  throw new Error('Function not implemented.');
}

