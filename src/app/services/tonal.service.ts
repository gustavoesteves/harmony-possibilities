import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chord, Scale } from '@tonaljs/tonal';
import { IInstruments } from './interfaces/instruments.interface';
import { Instruments } from 'src/app/services/db/instruments.db';
import { IPhrases } from './interfaces/phrases.interface';
import { MajorPhrase1 } from './db/major.phrase1.db';
import { MajorPhrase2 } from './db/major.phrase2.db';
import { MajorPhrase3 } from './db/major.phrase3.db';
import { MajorPhrase4 } from './db/major.phrase4.db';
import { IRondo } from './interfaces/rondo.interface';

@Injectable({
  providedIn: 'root'
})
export class TonalService {

  // guarda o tom escolhido no combo
  private tonality = new BehaviorSubject<string[]>([]);
  currentTonality = this.tonality.asObservable();

  // guardando o modo Maior ou Menor
  private mode = new BehaviorSubject<string[]>([]);
  currentMode = this.mode.asObservable();

  // guarda o status da div que desenha os acordes
  private chord = new BehaviorSubject<string[]>([]);
  currentChord = this.chord.asObservable();

  // guarda o instrumento
  private instrument = new BehaviorSubject<IInstruments[]>([]);
  currentInstrument = this.instrument.asObservable();

  // guarda o motivo
  private motivo = new BehaviorSubject<IPhrases[][]>([]);
  currentMotivo = this.motivo.asObservable();

  // guarda o motivo e acordes
  private motivoChords = new BehaviorSubject<IRondo[][]>([]);
  currentMotivoChords = this.motivoChords.asObservable();


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

  pushModeInit(mode: string[]) {
    this.mode.next(mode);
  }

  pushMode(mode: string) {
    const newMode = this.mode.value;
    newMode.push(mode);
    this.mode.next(newMode);
  }

  pushChordInit(chord: string[]) {
    this.chord.next(chord);
  }
  pushChord(chord: string) {
    // gravando nova tonalidade
    const newChord = this.chord.value;
    newChord.push(chord);
    this.chord.next(newChord);
  }

  pushInstrumentIni(instrument: IInstruments[]) {
    this.instrument.next(instrument);
  }

  pushInstrument(instrument: string) {
    let selectedInstrument: IInstruments = { Name: '', Notes: [], NumStrings: 0 };
    selectedInstrument = Instruments.find(value => value.Name === instrument);
    // gravando nova tonalidade
    const newInstrument = this.instrument.value;
    newInstrument.push(selectedInstrument);
    this.instrument.next(newInstrument);
  }

  pushMotivoInit() {
    const newMotivo: IPhrases[] = [];
    newMotivo.push(this.BuildPhrase());
    newMotivo.push(this.BuildPhrase());
    newMotivo.push(this.BuildPhrase());
    this.motivo.next([newMotivo]);
  }

  pushMotivo() {
    const newMotivo: IPhrases[] = [];
    newMotivo.push(this.BuildPhrase());
    newMotivo.push(this.BuildPhrase());
    newMotivo.push(this.BuildPhrase());
    this.motivo.next([newMotivo]);
  }

  pushMotivoChords(motivoChords: IRondo[]) {
    const newMotivo: IRondo[] = motivoChords;
    this.motivoChords.next([newMotivo]);
  }

  BuildPhrase(): IPhrases {
    const result: IPhrases = { Comp: [] };
    let f = MajorPhrase1[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
    for (const iterator of f.Comp) {
      result.Comp.push(iterator);
    }
    f = MajorPhrase2[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
    for (const iterator of f.Comp) {
      result.Comp.push(iterator);
    }
    f = MajorPhrase3[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
    for (const iterator of f.Comp) {
      result.Comp.push(iterator);
    }
    f = MajorPhrase4[Math.floor(Math.random() * (MajorPhrase1.length - 1))];
    for (const iterator of f.Comp) {
      result.Comp.push(iterator);
    }
    return result;
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
