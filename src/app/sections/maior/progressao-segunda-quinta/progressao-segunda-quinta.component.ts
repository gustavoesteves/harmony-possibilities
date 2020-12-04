import { Component, OnInit } from '@angular/core';
import { note, Note, Chord } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { TonalService } from 'src/app/services/tonal.service';

@Component({
  selector: 'app-progressao-segunda-quinta',
  templateUrl: './progressao-segunda-quinta.component.html',
  styleUrls: ['./progressao-segunda-quinta.component.css']
})
export class ProgressaoSegundaQuintaComponent implements OnInit {
  twoFiveSecondaryDominant: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.twoFiveSecondaryDominant = this.GetTwoFiveSecondaryDominant(note);
    });
   }

  ngOnInit(): void {
  }

  GetTwoFiveSecondaryDominant(note: string) {
    const result: INotes[] = [];
    let changeNote = '';

    // II de V7/II
    changeNote = Note.transpose(note, '3M');
    result.push({
      Romano: '',
      Acorde: 'II de V7/II <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['Mixolídio'], [], []),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/III
    changeNote = Note.transpose(note, '4A');
    result.push({
      Romano: '',
      Acorde: 'II de V7/III <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['Mixolídio'], [], []),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/IV
    changeNote = Note.transpose(note, '5M');
    result.push({
      Romano: '',
      Acorde: 'II de V7/IV <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['Mixolídio'], [], []),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/V
    changeNote = Note.transpose(note, '6M');
    result.push({
      Romano: '',
      Acorde: 'II de V7/V <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['Mixolídio'], [], []),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    // II de V7/VI
    changeNote = Note.transpose(note, '7M');
    result.push({
      Romano: '',
      Acorde: 'II de V7/VI <br>' +
        changeNote + 'm7, <br>' +
        changeNote + 'm7b5',
      Notas:
        Chord.get(changeNote + 'm7').notes.toString() + ', <br>' +
        Chord.get(changeNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, ['Mixolídio'], [], []),
      Extenções: '(9, 11) <br>' +
        '(' + Note.transpose(changeNote, '4M') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: ''
    });

    return result;
  }

}
