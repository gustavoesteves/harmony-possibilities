import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chord, Scale, Note } from '@tonaljs/tonal';
import { IInstruments } from './interfaces/instruments.interface';
import { Instruments } from 'src/app/services/db/instruments.db';
import { IPhrases } from './interfaces/phrases.interface';
import { IRondo } from './interfaces/rondo.interface';
import { MajorPhrase1 } from './db/major.phrase1.db';
import { MajorPhrase2 } from './db/major.phrase2.db';
import { MajorPhrase3 } from './db/major.phrase3.db';
import { MajorPhrase4 } from './db/major.phrase4.db';
import { IEsquema } from './interfaces/esquema.interface';
import { Esquema } from './db/esquema.db';
import { MainorPhrase1 } from './db/mainor.phrase1.db';
import { MainorPhrase2 } from './db/mainor.phrase2.db';
import { MainorPhrase3 } from './db/mainor.phrase3.db';
import { MainorPhrase4 } from './db/mainor.phrase4.db';

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

  // guarda o motivo e acordes
  private motivoChords = new BehaviorSubject<IRondo[][]>([]);
  currentMotivoChords = this.motivoChords.asObservable();

  // guarda o frase Romana
  private frase = new BehaviorSubject<IPhrases[][]>([]);
  currentFrase = this.frase.asObservable();

  // guarda o esquema
  private esquema = new BehaviorSubject<IEsquema[]>([]);
  currentEsquema = this.esquema.asObservable();

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

  /**
   * Funções relativas a Geração de progressão harmonica
   */

  pushEsquema(esquema: IEsquema) {
    this.esquema.next([esquema]);
  }

  BuildChordProgressionInit() {
    const esquema = Esquema[0];
    this.esquema.next([esquema]);
    this.GetCompasso(esquema, this.GetMotivoInit(esquema), 'C');
  }

  GetMotivoInit(esquema: IEsquema): IPhrases[] {
    const newMotivo: IPhrases[] = [];
    newMotivo.push(this.BuildPhrase(esquema.Frase1.Modo));
    newMotivo.push(this.BuildPhrase(esquema.Frase2.Modo));
    newMotivo.push(this.BuildPhrase(esquema.Frase3.Modo));
    this.frase.next([newMotivo]);
    return newMotivo;
  }

  BuildPhrase(modo: string): IPhrases {
    const result: IPhrases = { Comp: [] };
    if (modo === '+') {
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
    } else {
      let f = MainorPhrase1[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
      for (const iterator of f.Comp) {
        result.Comp.push(iterator);
      }
      f = MainorPhrase2[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
      for (const iterator of f.Comp) {
        result.Comp.push(iterator);
      }
      f = MainorPhrase3[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
      for (const iterator of f.Comp) {
        result.Comp.push(iterator);
      }
      f = MainorPhrase4[Math.floor(Math.random() * (MainorPhrase1.length - 1))];
      for (const iterator of f.Comp) {
        result.Comp.push(iterator);
      }
    }
    return result;
  }

  ChangeEsquema(esquema: IEsquema, frase: IPhrases[], note: string) {
    const newFrase: IPhrases[] = [];
    newFrase.push(this.BuildPhrase(esquema.Frase1.Modo));
    newFrase.push(this.BuildPhrase(esquema.Frase2.Modo));
    newFrase.push(this.BuildPhrase(esquema.Frase3.Modo));
    this.frase.next([newFrase]);
    this.GetCompasso(esquema, newFrase, note);
  }

  GetCompasso(esquema: IEsquema, frase: IPhrases[], note: string) {
    const result: IRondo[] = [
      { Compasso: '1', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '2', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '3', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '4', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '5', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '6', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '7', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '8', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '9', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '10', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '11', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '12', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '13', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '14', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '15', Frase1: '', Frase2: '', Frase3: '' },
      { Compasso: '16', Frase1: '', Frase2: '', Frase3: '' }
    ];
    for (let iMotivo = 0; iMotivo < frase.length; iMotivo++) {
      if (iMotivo === 0) {
        for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
          result[iCompasso - 1].Frase1 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
            this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), note);
        }
      } else if (iMotivo === 1) {
        for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
          result[iCompasso - 1].Frase2 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
            this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), Note.transpose(note, esquema.Frase2.Tonalidade));
        }
      } else {
        for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
          result[iCompasso - 1].Frase3 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
            this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), Note.transpose(note, esquema.Frase3.Tonalidade));
        }
      }
    }
    this.motivoChords.next([result]);
  }

  GetAllChords(chord: string, note: string): string {
    if (chord.indexOf(',') !== -1) {
      let result = '';
      result = this.GetChordName(chord.substr(0, chord.indexOf(',')), note);
      return result + ', ' + this.GetChordName(chord.substr(chord.indexOf(',') + 1, chord.length), note);
    } else {
      return this.GetChordName(chord, note);
    }
  }

  GetChordName(chord: string, note: string): string {
    switch (chord) {
      case 'I': {
        return note + 'maj7';
      }
      case 'II': {
        return Note.transpose(note, '2M') + 'm7';
      }
      case 'III': {
        return Note.transpose(note, '3M') + 'm7';
      }
      case 'IV': {
        return Note.transpose(note, '4M') + 'maj7';
      }
      case 'V': {
        return Note.transpose(note, '5M') + '7';
      }
      case 'VI': {
        return Note.transpose(note, '6M') + 'm7';
      }
      case 'VII': {
        return Note.transpose(note, '7M') + 'm7b5';
      }
      case 'V/II': {
        return Note.transpose(note, '6M') + '7';
      }
      case 'V/III': {
        return Note.transpose(note, '7M') + '7';
      }
      case 'V/IV': {
        return note + '7';
      }
      case 'V/V': {
        return Note.transpose(note, '2M') + '7';
      }
      case 'V/VI': {
        return Note.transpose(note, '3M') + '7';
      }
      case 'I6': {
        return Note.transpose(note, '3M') + '/' + note;
      }
      case 'I4': {
        return Note.transpose(note, '5M') + '/' + note;
      }
      case 'bIIIo': {
        return Note.transpose(note, '3m') + 'dim7';
      }
      case 'Vo/II': {
        return Note.transpose(note, '2m') + 'dim7';
      }
      case 'Vo/III': {
        return Note.transpose(note, '3m') + 'dim7';
      }
      case 'Vo/V': {
        return Note.transpose(note, '5m') + 'dim7';
      }
      case 'IVm': {
        return Note.transpose(note, '4M') + 'm7';
      }
      case 'Im': {
        return note + 'm7';
      }
      case 'IIm': {
        return Note.transpose(note, '2M') + 'm7b5';
      }
      case 'IIIM': {
        return Note.transpose(note, '3M') + 'maj7';
      }
      case 'Vm': {
        return Note.transpose(note, '5M') + 'm7';
      }
      case 'VIM': {
        return Note.transpose(note, '6M') + 'maj7';
      }
      case 'bII': {
        return Note.transpose(note, '2m') + '+5';
      }
      default: {
        break;
      }
    }
  }

  /**
   * Outras funções
   */

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
