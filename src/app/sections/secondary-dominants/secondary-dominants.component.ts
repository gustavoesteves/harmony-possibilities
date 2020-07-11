import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-secondary-dominants',
  templateUrl: './secondary-dominants.component.html',
  styleUrls: ['./secondary-dominants.component.css']
})
export class SecondaryDominantsComponent implements OnInit {
  header = ['Chord', 'Notes', 'Scales', 'Extended'];
  secondaryDominants: INotes[] = [];
  extendedEg1 = '';
  extendedEg2 = '';
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

      this.extendedEg1 =
        Note.transpose(note, '3M') + '7 -> ' + Note.transpose(note, '6M') + '7 -> ' +
        Note.transpose(note, '2M') + '7 -> ' + Note.transpose(note, '5P') + '7 -> ' + note + 'maj7 (e.g.)';
      this.extendedEg2 =
        Note.transpose(note, '2M') + '7 -> ' + Note.transpose(note, '5P') + '7 -> ' + note + '7 -> ' +
        Note.transpose(note, '4P') + 'maj7 -> ' + Note.transpose(note, '7M') + '7 -> ' +
        Note.transpose(note, '3M') + '7 -> ' + Note.transpose(note, '6M') + '7 -> ' +
        Note.transpose(note, '2M') + 'm7 (e.g.)';

      this.progressionEg1 = 'II of V7/II <br>' + '[' +
        Note.transpose(note, '3M') + 'm7 -> ' + Note.transpose(note, '6M') + '7] -> ' + Note.transpose(note, '2M') + 'm7 (e.g.) <br> [' +
        Note.transpose(note, '3M') + 'm7b5 -> ' + Note.transpose(note, '6M') + '7] -> ' + Note.transpose(note, '2M') + 'm7 (e.g.)';
      this.progressionEg2 = 'II of V7/III <br>' + '[' +
        Note.transpose(note, '4A') + 'm7 -> ' + Note.transpose(note, '7M') + '7] -> ' + Note.transpose(note, '3M') + 'm7 (e.g.) <br> [' +
        Note.transpose(note, '4A') + 'm7b5 -> ' + Note.transpose(note, '7M') + '7] -> ' + Note.transpose(note, '3M') + 'm7 (e.g.)';
      this.progressionEg3 = 'II of V7/IV <br>' +
        '[' + Note.transpose(note, '5P') + 'm7 -> ' + note + '7] -> ' + Note.transpose(note, '4P') + 'maj7 (e.g.) <br>' +
        '[' + Note.transpose(note, '5P') + 'mb57 -> ' + note + '7] -> ' + Note.transpose(note, '4P') + 'maj7 (e.g.)';
      this.progressionEg4 = 'II of V7/V <br>' + '[' +
        Note.transpose(note, '6M') + 'm7 -> ' + Note.transpose(note, '2M') + '7] -> ' + Note.transpose(note, '5P') + '7 (e.g.) <br> [' +
        Note.transpose(note, '6M') + 'm7b5 -> ' + Note.transpose(note, '2M') + '7] -> ' + Note.transpose(note, '5P') + '7 (e.g.)';
      this.progressionEg5 = 'II of V7/VI <br>' +
        '[' + Note.transpose(note, '7M') + 'm7 -> ' + Note.transpose(note, '3M') + '7] -> ' +
        Note.transpose(note, '6M') + 'm7 (e.g.) <br>' +
        '[' + Note.transpose(note, '7M') + 'm7b5 -> ' + Note.transpose(note, '3M') + '7] -> ' + Note.transpose(note, '6M') + 'm7 (e.g.)';
    });
  }

  GetSecondaryDominants(note: string) {
    const result: INotes[] = [];
    let changeNote = '';

    // V7/II
    changeNote = Note.transpose(note, '6M');
    result.push({
      Chord: 'V7/II -> II <br>' + changeNote + '7 -> ' + Note.transpose(note, '2M') + 'm7',
      Notes: Chord.get(changeNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extended: '(' + Note.transpose(changeNote, '2M') + ', ' + Note.transpose(changeNote, '6m') + ')',
      Cadence: ''
    });

    // V7/III
    changeNote = Note.transpose(note, '7M');
    result.push({
      Chord: 'V7/III -> III <br>' + changeNote + '7 -> ' +
        Note.transpose(note, '3M') + 'm7, <br>' + changeNote + '7b5 -> ' + Note.transpose(note, '3M') + 'm7',
      Notes: Chord.get(changeNote + '7').notes.toString() + '<br>' + Chord.get(changeNote + '7b5').notes.toString(),
      Scales: this.tonalService.GetScales(changeNote, ['mixolydian', 'altered']),
      Extended: '(' + Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '3m') + ', ' + Note.transpose(changeNote, '6m') + ')',
      Cadence: ''
    });

    // V7/IV
    result.push({
      Chord: 'V7/IV -> IV <br>' + note + '7 -> ' + Note.transpose(note, '4P') + 'maj7',
      Notes: Chord.get(note + '7').notes.toString(),
      Scales: this.tonalService.GetScales(note, ['mixolydian']),
      Extended: '(' + Note.transpose(note, '2M') + ', ' + Note.transpose(note, '6M') + ')',
      Cadence: ''
    });

    // V7/V
    changeNote = Note.transpose(note, '2M');
    result.push({
      Chord: 'V7/V -> V <br>' + changeNote + '7 -> ' + Note.transpose(note, '5P') + '7',
      Notes: Chord.get(changeNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extended: '(' + Note.transpose(changeNote, '2M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadence: ''
    });

    // V7/VI
    changeNote = Note.transpose(note, '3M');
    result.push({
      Chord: 'V7/VI -> VI <br>' + changeNote + '7 -> ' + Note.transpose(note, '6M') + 'm7',
      Notes: Chord.get(changeNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(changeNote, ['mixolydian']),
      Extended: '(' + Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '3m') + ', ' + Note.transpose(changeNote, '6m') + ')',
      Cadence: ''
    });


    return result;
  }

  loadChords(chord: string) {
    this.tonalService.pushMode('draw');
    this.tonalService.pushChord(chord);
  }
}
