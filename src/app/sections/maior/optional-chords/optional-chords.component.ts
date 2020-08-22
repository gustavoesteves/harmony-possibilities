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
  majorMode: INoteExtended[] = [];
  alteredDominant: INotes[] = [];
  symetricDominant: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.majorMode = this.GetOptionalChords(note);
      this.alteredDominant = this.GetAlteredDominant(note);
      this.symetricDominant = this.GetSymetricDominant(note);
    });
  }

  GetOptionalChords(note: string) {
    const result: INoteExtended[] = [];

    // Fifth
    const fifithNote = Note.transpose(note, '5P');

    result.push({
      Roman: '',
      Acorde:
        fifithNote + '7b9, <br>' +
        fifithNote + '7#9, <br>' +
        fifithNote + '13b9, <br>' +
        fifithNote + '7b13b9',
      Notas:
        Chord.get(fifithNote + '7b9').notes.toString() + ', <br>' +
        Chord.get(fifithNote + '7#9').notes.toString() + ', <br>' +
        Chord.get(fifithNote + '13b9').notes.toString() + ', <br>' +
        Chord.get(fifithNote + '7b9b13').notes.toString(),
      Escalas:
        this.tonalService.GetScales(fifithNote, ['half-whole diminished']) + '<br>' +
        this.tonalService.GetScales(fifithNote, ['phrygian dominant']),
      Extenções: '(9b, 9#, b13, 13) <br>' +
        '(' + Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '2A') + ', ' +
        Note.transpose(fifithNote, '6m') + ', ' +
        Note.transpose(fifithNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    return result;
  }

  GetAlteredDominant(note: string) {
    const result: INotes[] = [];

    // Fifth
    const fifithNote = Note.transpose(note, '5P');

    result.push({
      Acorde:
        fifithNote + '7b5b9, <br>' +
        fifithNote + '9b5b13, <br>' +
        fifithNote + '7b5b9b13',
      Notas:
        Chord.get(fifithNote + '7b5b9').notes.toString() + ', <br>' +
        Chord.get(fifithNote + '9b5b13').notes.toString() + ', <br>' +
        Chord.get(fifithNote + '7b5b9b13').notes.toString(),
      Escalas: '',
      Extenções:
        '(' +
        Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '3m') + ', ' +
        Note.transpose(fifithNote, '6m') + ')',
      Cadência: ''
    });

    return result;
  }

  GetSymetricDominant(note: string) {
    const result: INotes[] = [];

    // Fifth
    const fifithNote = Note.transpose(note, '5P');

    result.push({
      Acorde: fifithNote + '7#9#11, <br>' + fifithNote + '13#9#11, <br>' + fifithNote + '13b9#11',
      Notas: Chord.get(fifithNote + '7#9#11').notes.toString() + ', <br>' +
        Chord.get(fifithNote + '13#9#11').notes.toString() + ', <br>' + Chord.get(fifithNote + '13b9#11').notes.toString(),
      Escalas: '',
      Extenções: '(' + Note.transpose(fifithNote, '2m') + ', ' +
        Note.transpose(fifithNote, '3m') + ', ' + Note.transpose(fifithNote, '4A') + ', ' + Note.transpose(fifithNote, '6M') + ')',
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
