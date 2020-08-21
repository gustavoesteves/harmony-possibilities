import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { Note, Chord } from '@tonaljs/tonal';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';

@Component({
  selector: 'app-secondary-dominants',
  templateUrl: './secondary-dominants.component.html',
  styleUrls: ['./secondary-dominants.component.css']
})
export class SecondaryDominantsComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
  secondaryDominants: INotes[] = [];
  twoFiveSecondaryDominant: INotes[] = [];
  progressionEg1 = '';
  progressionEg2 = '';
  progressionEg3 = '';
  progressionEg4 = '';
  progressionEg5 = '';

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.secondaryDominants = this.GetSecondaryDominants(note);
      this.twoFiveSecondaryDominant = this.GetTwoFiveSecondaryDominant(note);
    });
  }

  GetSecondaryDominants(note: string) {
    const result: INotes[] = [];
    let changeNote = '';

    // V7/II
    changeNote = Note.transpose(note, '6M');
    result.push({
      Acorde: 'V7/II <br>' + changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(b9, #9, b13) <br> (' +
        Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '2A') + ', ' +
        Note.transpose(changeNote, '6m') + ')',
      Cadência: ''
    });

    // V7/III
    changeNote = Note.transpose(note, '7M');
    result.push({
      Acorde: 'V7/III <br>' + changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(b5, b9, #9, b13) <br> (' +
        Note.transpose(changeNote, '5d') + ', ' +
        Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '2A') + ', ' +
        Note.transpose(changeNote, '6m') + ')',
      Cadência: ''
    });

    // V7/IV
    result.push({
      Acorde: 'V7/IV <br>' + note + '7',
      Notas: Chord.get(note + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(note, ['mixolydian']),
      Extenções: '(9, 13) <br> (' +
        Note.transpose(note, '2M') + ', ' +
        Note.transpose(note, '6M') + ')',
      Cadência: ''
    });

    // V7/V
    changeNote = Note.transpose(note, '2M');
    result.push({
      Acorde: 'V7/V <br>' + changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(9, 13) <br> (' +
        Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // V7/VI
    changeNote = Note.transpose(note, '3M');
    result.push({
      Acorde: 'V7/VI <br>' + changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(b9, #9, b13) <br> (' +
        Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '2A') + ', ' +
        Note.transpose(changeNote, '6m') + ')',
      Cadência: ''
    });


    return result;
  }

  GetTwoFiveSecondaryDominant(note: string) {
    const result: INotes[] = [];
    let changeNote = '';

    // II de V7/II
    changeNote = Note.transpose(note, '3M');
    result.push({
      Acorde: 'II de V7/II <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/III
    changeNote = Note.transpose(note, '4A');
    result.push({
      Acorde: 'II de V7/III <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/IV
    changeNote = Note.transpose(note, '5M');
    result.push({
      Acorde: 'II de V7/IV <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/V
    changeNote = Note.transpose(note, '6M');
    result.push({
      Acorde: 'II de V7/V <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/VI
    changeNote = Note.transpose(note, '7M');
    result.push({
      Acorde: 'II de V7/VI <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    return result;
  }

  loadChords(chord: INoteExtended) {
    this.tonalService.pushChord(chord);
  }
}
