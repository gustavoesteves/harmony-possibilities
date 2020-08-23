import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from '../../../services/tonal.service';
import { IInstruments } from '../../../services/interfaces/instruments.interface';
import { ITranslate } from '../../../services/interfaces/translate.interface';
import { Chord } from '@tonaljs/tonal';
import { findFingerings } from 'chord-fingering';
import { ChordBox } from 'vexchords';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';
import { Instruments } from 'src/app/services/db/instruments.db';

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

  constructor(private tonalService: TonalService) {
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

  onSelectInstrument(item: string): void {
    this.tonalService.pushInstrument(item);
    // montando acorde
    this.drawChords();
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
    }
  }

  drawChords() {
    const notesTriade = this.GetNotes(this.acorde);
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
        if (count < 24) {
          const chordTranslate = this.GetTranslate(findsChords[i][j]);
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


  GetNotes(chord: string): Array<string> {
    const result: Array<string> = [];
    if (chord.indexOf('/') > 0 && chord.indexOf('6') < 0) {
      console.log('tem sim: ' + chord + ' - ' + chord.indexOf('/') + ' - ' + chord.substr(chord.length - 1, 1));
      const inversion: Array<string> = [];
      if (chord.indexOf('m') > 0) {
        // tratamento para acordes invertidos menores
        for (const note of Chord.get(chord.substr(chord.length - 2, 2)).notes) {
          inversion.push(note);
        }
        result.push(chord.substr(chord.length - 4, 1));
        for (const note of inversion) {
          if (result[0] !== note) {
            result.push(note);
          }
        }
      }
      else {
        // tratamento para acordes invertidos maiores
        for (const note of Chord.get(chord.substr(chord.length - 1, 1)).notes) {
          inversion.push(note);
        }
        result.push(chord.substr(chord.length - 3, 1));
        for (const note of inversion) {
          if (result[0] !== note) {
            result.push(note);
          }
        }
      }
    } else {
      // acordes sem inversão
      for (const note of Chord.get(chord).notes) {
        result.push(note);
      }
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

}
