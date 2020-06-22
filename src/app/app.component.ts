import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from './services/tonal.service';
import { Chord } from '@tonaljs/tonal';
import * as ChordFingering from 'chord-fingering';
import { ChordBox } from 'vexchords';
import { ITranslate } from './services/interfaces/translate.interface';
import { IInstruments } from 'src/app/services/interfaces/instruments.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('common', { static: true }) divCommon: ElementRef;
  @ViewChild('first', { static: true }) divFirst: ElementRef;
  @ViewChild('second', { static: true }) divSecond: ElementRef;
  @ViewChild('third', { static: true }) divThird: ElementRef;
  isHidden = false;
  gallery = 'modal';
  naturalChord = '';
  firstInversion = '';
  secondInversion = '';
  thirdInversion = '';
  instrument: IInstruments;

  constructor(private tonalService: TonalService) {
    this.tonalService.pushModeInit([false]);
    this.tonalService.pushChordInit([null]);
  }

  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.isHidden = value[value.length - 1];
    });
    this.tonalService.currentChord.subscribe(value => {
      this.DrawChords(value[value.length - 1]);
    });
    this.tonalService.currentInstrument.subscribe(value => {
      this.instrument = value[value.length - 1];
    });
  }

  DrawChords(chord: string) {
    if (chord != null) {
      // apagando valores da div
      this.gallery = 'modal visible loaded';

      // pegando as notas do acorde
      const notes = this.GetNotes(chord);

      // carregando variaveis de tela
      this.naturalChord = chord;
      this.firstInversion = chord + '/' + notes[1];
      this.secondInversion = chord + '/' + notes[2];
      this.thirdInversion = chord + '/' + notes[3];

      // fazendo os desenhos na div
      this.FindAndDrawChords(notes, notes[0], this.divCommon.nativeElement);
      this.FindAndDrawChords(notes, notes[1], this.divFirst.nativeElement);
      this.FindAndDrawChords(notes, notes[2], this.divSecond.nativeElement);
      this.FindAndDrawChords(notes, notes[3], this.divThird.nativeElement);
    } else {
      this.divCommon.nativeElement.innerHTML = '';
      this.divFirst.nativeElement.innnerHTML = '';
      this.divSecond.nativeElement.innnerHTML = '';
      this.divThird.nativeElement.innnerHTML = '';
      this.gallery = 'modal';
    }
  }

  FindAndDrawChords(notes: string[], bass: string, selector: any) {
    selector.innerHTML = '';
    const findsChords = ChordFingering.findFingerings(notes, [], bass, this.instrument.Notes);
    for (const newChord of findsChords) {
      const chordTranslate = this.GetTranslate(newChord);

      new ChordBox(selector, {
        numStrings: this.instrument.NumStrings,
        numFrets: 5
      }).draw({
        chord: chordTranslate.Chord,
        position: chordTranslate.Position,
        tuning: this.instrument.Notes
      });
    }
  }

  GetNotes(chord: string): Array<string> {
    const result: Array<string> = [];
    for (const note of Chord.get(chord).notes) {
      result.push(note);
    }
    return result;
  }

  GetTranslate(chord: any): ITranslate {
    const result: ITranslate = { Chord: [], Position: chord.barre };

    // criando array invertido das notas do acorde
    let newChord: string[] = [];
    let chordPosition = chord.positionString;
    if (chordPosition.indexOf('-') > 0) {
      while (chordPosition.indexOf('-') > 0) {
        const notePlace = chordPosition.substr(chordPosition.lastIndexOf('-') + 1,
          chordPosition.length - chordPosition.lastIndexOf('-') - 1);
        newChord.push(notePlace);
        chordPosition = chordPosition.substr(0, chordPosition.lastIndexOf('-'));
      }
      newChord.push(chordPosition);
    } else {
      newChord = chord.positionString.split('').reverse();
    }

    // verificando se acorde tem posicao depois da casa 5
    let positionFive = false;
    for (const position of newChord) {
      if (Number(position) > 5) { positionFive = true; }
    }

    // verificando se acorde tem posicao depois da casa 5 e na casa 5 tambem
    let haveFive = false;
    for (const position of newChord) {
      if (positionFive && Number(position) === 5) { haveFive = true; }
    }

    // verificando se acorde precisa de barra
    let barre = 0;
    let positionBarre = 0;
    for (const position of newChord) {
      if (Number(position) > 5 && Number(position) > barre) { barre = Number(position); }
    }
    if (barre > 0) {
      result.Position = barre - 4;
      positionBarre = barre - 5;
    } else {
      result.Position = null;
    }

    // recalculando valor das posicoes do acorde
    let index = 1;
    for (const position of newChord) {
      if (Number(position) > 0 && position !== 'x') {
        result.Chord.push([index, Number(position) - positionBarre]);
      } else {
        result.Chord.push([index, position]);
      }
      index++;
    }

    return result;
  }

  closeModal() {
    this.tonalService.pushChord(null);
  }

  onSelect(mode: boolean): void { }
}
