import { Component, OnInit } from '@angular/core';
import { Chord, Note, Scale } from '@tonaljs/tonal';
import { INotes } from '../../../services/interfaces/notes.interface';
import { TonalService } from '../../../services/tonal.service';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';

@Component({
  selector: 'app-optional-chords',
  templateUrl: './optional-chords.component.html',
  styleUrls: ['./optional-chords.component.css']
})
export class OptionalChordsComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
  primeiraOpcional: INotes[] = [];
  segundaOpcional: INotes[] = [];
  terceiraOpcional: INotes[] = [];
  alteredDominant: INotes[] = [];
  symetricDominant: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.primeiraOpcional = this.GetOptionalChords(note);
      this.segundaOpcional = this.GetSegundaOpcional(note);
      this.terceiraOpcional = this.GetTerceiraOpcional(note);
      this.alteredDominant = this.GetAlteredDominant(note);
      this.symetricDominant = this.GetSymetricDominant(note);
    });
  }

  GetOptionalChords(note: string) {
    const result: INotes[] = [];

    // Fifth
    const fifithNote = Note.transpose(note, '5P');
    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (b9)',
      Notas: Chord.get(fifithNote + '7b9').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [
        'Frígio #3',
        'Mixolídio b2'], [], []),
      Extenções: '(9b) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (13)',
      Notas: Chord.get(fifithNote + '13').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [
        'Mixolídio',
        'Mixolídio #4'], [], []),
      Extenções: '(13) <br>' +
        '(' + Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (b9 13)',
      Notas: Chord.get(fifithNote + '13b9').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [
        'Mixolídio b2'], [], []),
      Extenções: '(9b, 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    return result;
  }

  GetSegundaOpcional(note: string) {
    const result: INotes[] = [];

    // Fifth
    const fifithNote = Note.transpose(note, '5P');
    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (b13)',
      Notas: Chord.get(fifithNote + '7b6').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [
        'Eólico #3',
        'Frígio #3'], [], []),
      Extenções: '(13b) <br>' +
        '(' + Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (b9 b13)',
      Notas: Chord.get(fifithNote + '7b9b13').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [
        'Frígio #3'], [], []),
      Extenções: '(9b 13b) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    return result;
  }

  GetTerceiraOpcional(note: string) {
    const result: INotes[] = [];

    // Fifth
    const fifithNote = Note.transpose(note, '5P');
    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (#9)',
      Notas: Chord.get(fifithNote + '7#9').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '3m']),
      Extenções: '(9#) <br>' +
        '(' + Note.transpose(fifithNote, '2A') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (b9 #9)',
      Notas: Chord.get(fifithNote + '7b9#9').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '3m']),
      Extenções: '(b9 #9) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '2A') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (#9 b13)',
      Notas: Chord.get(fifithNote + '7#9b13').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '3m', '6m']),
      Extenções: '(#9 b13) <br>' +
        '(' + Note.transpose(fifithNote, '2A') + ', ' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7 (b9 #9 b13)',
      Notas: Chord.get(fifithNote + '7#9').notes.toString(),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '3m', '6m']),
      Extenções: '(b9 #9 b13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '2A') + ', ' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    return result;
  }

  GetAlteredDominant(note: string) {
    const result: INotes[] = [];

    const fifithNote = Note.transpose(note, '5P');
    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d']),
      Extenções: '',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(b9)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '2m']),
      Extenções: '(b9) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(#9)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '3m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '3m']),
      Extenções: '(#9) <br>' +
        '(' + Note.transpose(fifithNote, '2A') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(b13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '6m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '6m']),
      Extenções: '(b13) <br>' +
        '(' + Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(b9 #9)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '2m', '3m']),
      Extenções: '(b9 #9) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(b9 b13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '6m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '2m', '6m']),
      Extenções: '(b9 #9) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(#9 b13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '6m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '3m', '6m']),
      Extenções: '(b9 #9) <br>' +
        '(' + Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7b5(b9 #9 b13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5d') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '6m'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5d', '2m', '3m', '6m']),
      Extenções: '(b9 #9 b13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ', ' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    return result;
  }

  GetSymetricDominant(note: string) {
    const result: INotes[] = [];
    // V7(b9 13), V7(#9 13), V7(#11 13), V7(9b #9 13), V7(#9 #11 13), V7(9b #9 #11 13)

    // Fifth
    const fifithNote = Note.transpose(note, '5P');
    result.push({
      Romano: '',
      Acorde: fifithNote + '7(b9 13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5P') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '6M'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5P', '2m', '6M']),
      Extenções: '(b9 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7(#9 13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5P') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '6M'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5P', '3m', '6M']),
      Extenções: '(#9 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7(#11 13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5P') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '4A') + ',' +
        Note.transpose(fifithNote, '6M'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5P', '4A', '6M']),
      Extenções: '(#11 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7(b9 #9 13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5P') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '6M'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5P', '2m', '3m', '6M']),
      Extenções: '(b9 #9 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7(#9 #11 13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5P') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '4A') + ',' +
        Note.transpose(fifithNote, '6M'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5P', '4A', '3m', '6M']),
      Extenções: '(#9 #11 13) <br>' +
        '(' + Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '4A') + ',' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    result.push({
      Romano: '',
      Acorde: fifithNote + '7(b9 #9 #11 13)',
      Notas:
        fifithNote + ',' +
        Note.transpose(fifithNote, '3M') + ',' +
        Note.transpose(fifithNote, '5P') + ',' +
        Note.transpose(fifithNote, '7m') + ',' +
        Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '4A') + ',' +
        Note.transpose(fifithNote, '6M'),
      Escalas: this.tonalService.GetScales(fifithNote, [], [], ['3M', '7m', '5P', '2m', '3m', '4A', '6M']),
      Extenções: '(b9 #9 #11 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ',' +
        Note.transpose(fifithNote, '3m') + ',' +
        Note.transpose(fifithNote, '4A') + ',' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: ''
    });

    return result;
  }

  GetLocalScale(note: string, chord: string) {
    let result = '';
    for (const scales of Scale.extended(chord)) {
      for (const notes of Scale.get(note + ' ' + scales).notes) {
        result += notes + ', ';
      }
      result += result.substr(0, result.length - 2) + '<br>';
    }
    return '';
  }

  loadChords(chord: INoteExtended) {
    this.tonalService.pushChord(chord);
  }
}
