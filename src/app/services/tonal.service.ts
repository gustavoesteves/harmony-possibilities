import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chord, Key, Note, Scale } from "@tonaljs/tonal";

@Injectable({
  providedIn: 'root'
})
export class TonalService {

  //guarda o tom escolhido no combo
  private tonality = new BehaviorSubject<string[]>([]);
  currentTonality = this.tonality.asObservable();

  constructor() { }

  pushTonalityInit(tonality: string[]) {
    this.tonality.next(tonality);
  }

  pushTonality(tonality: string) {
    //gravando nova tonalidade
    const newTonality = this.tonality.value;
    newTonality.push(tonality);
    this.tonality.next(newTonality);
  }

  returnNotes(arrayNotes: string[]) {
    let _notes = "";
    for (const iterator of arrayNotes) {
      _notes += iterator + ", ";
    }
    return _notes.substr(0, _notes.length - 2);
  }

  returnExtended(_note: string)
  {
    let result = "";
    for (const _chord of Chord.extended(_note)) {
      result += _chord + " <br>";
    }
    return result;
  }

  GetSeventhChord(_notes: string[]){
    let result = "";
    for (let index = 0; index < 4; index++) {
      result += _notes[index] + ", ";
    }

    return result.substr(0, result.length - 2);
  }

  GetScales(_chord: string, scales: string[]) {
    let _reuslt = "";
    for (const _scale of scales) {
      _reuslt += _scale + "<br> (";
      for (const _notes of Scale.get(_chord + " " + _scale).notes) {
        _reuslt += _notes + ", ";
      }
      _reuslt = _reuslt.substr(0, _reuslt.length - 2) + ")";
      _reuslt += "<br>";
    }
    return _reuslt;
  }
  
  GetScalesTotal(_chord: string){
    let result = "";
    for (const scale of Chord.chordScales(_chord)) {
      result += scale + " (";
      const _notes = Scale.get(Chord.get(_chord).tonic + " " + scale).notes;
      for (const _note of _notes) {
        result += _note + ", ";
      }
      result = result.substr(0, result.length - 2);
      result += ") <br>";
    }

    return result.substr(0, result.length - 2);
  }

  GetExtended(_note: string){
    let result = "";
    for (const _chord of Chord.extended(_note)) {
      result += _chord + " (";
      const _notes = Chord.get(_chord).notes;  
      for (let index = 0; index < _notes.length; index++) {
        result += _notes[index] + ", ";
      }
      result = result.substr(0, result.length - 2);
      result += ") <br>";
    }

    return result.substr(0, result.length - 2);
  }
}
