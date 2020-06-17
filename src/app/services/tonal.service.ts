import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chord, Key, Note, Scale } from '@tonaljs/tonal';

@Injectable({
  providedIn: 'root'
})
export class TonalService {

  // guarda o tom escolhido no combo
  private tonality = new BehaviorSubject<string[]>([]);
  currentTonality = this.tonality.asObservable();

  // guardando o modo Maior ou Menor
  private mode = new BehaviorSubject<boolean[]>([]);
  currentMode = this.mode.asObservable();

  constructor() { }

  pushTonalityInit(tonality: string[]) {
    this.tonality.next(tonality);
  }

  pushTonality(tonality: string) {
    // gravando nova tonalidade
    const newTonality = this.tonality.value;
    newTonality.push(tonality);
    this.tonality.next(newTonality);
  }

  pushModeInit(mode: boolean[]) {
    this.mode.next(mode);
  }

  pushMode(mode: boolean) {
    const newMode = this.mode.value;
    newMode.push(mode);
    this.mode.next(newMode);
  }

  returnNotes(arrayNotes: string[]) {
    let notes = '';
    for (const iterator of arrayNotes) {
      notes += iterator + ', ';
    }
    return notes.substr(0, notes.length - 2);
  }

  returnExtended(note: string) {
    let result = '';
    for (const chord of Chord.extended(note)) {
      result += chord + ' <br>';
    }
    return result;
  }

  GetSeventhChord(notes: string[]) {
    let result = '';
    for (let index = 0; index < 4; index++) {
      result += notes[index] + ', ';
    }

    return result.substr(0, result.length - 2);
  }

  GetScales(chord: string, scales: string[]) {
    let reuslt = '';
    for (const scale of scales) {
      reuslt += scale + '<br> (';
      for (const notes of Scale.get(chord + ' ' + scale).notes) {
        reuslt += notes + ', ';
      }
      reuslt = reuslt.substr(0, reuslt.length - 2) + ')';
      reuslt += '<br>';
    }
    return reuslt;
  }

  GetScalesTotal(chord: string) {
    let result = '';
    for (const scale of Chord.chordScales(chord)) {
      result += scale + ' (';
      const notes = Scale.get(Chord.get(chord).tonic + ' ' + scale).notes;
      for (const note of notes) {
        result += note + ', ';
      }
      result = result.substr(0, result.length - 2);
      result += ') <br>';
    }

    return result.substr(0, result.length - 2);
  }

  GetExtended(note: string) {
    let result = '';
    for (const chord of Chord.extended(note)) {
      result += chord + ' (';
      const notes = Chord.get(chord).notes;
      for (const iterator of notes) {
        result += iterator + ', ';
      }
      result = result.substr(0, result.length - 2);
      result += ') <br>';
    }

    return result.substr(0, result.length - 2);
  }
}
