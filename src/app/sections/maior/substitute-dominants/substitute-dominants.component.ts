import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { Note, Chord } from '@tonaljs/tonal';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';

@Component({
  selector: 'app-substitute-dominants',
  templateUrl: './substitute-dominants.component.html',
  styleUrls: ['./substitute-dominants.component.css']
})
export class SubstituteDominantsComponent implements OnInit {
  header = ['Grau', 'Acorde', 'Notas', 'Escalas', 'Extenções', 'Cadência'];
  substituteDominants: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.substituteDominants = this.GetSubstituteDominants(note);
    });
  }

  GetSubstituteDominants(note: string) {
    const result: INotes[] = [];
    let changeNote = '';

    // subV/I
    changeNote = Note.transpose(note, '2m');
    result.push({
      Grau: 'subV/I',
      Acorde: changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2m']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '2M') + 'm7 → ' + changeNote + '7 → ' + note + 'maj7'
    });

    result.push({
      Grau: '',
      Acorde: '',
      Notas: '',
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2M']),
      Extenções: '(#9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '2M') + 'm7 → ' + changeNote + '7 → ' + note + 'maj7'
    });

    // subV/II
    changeNote = Note.transpose(note, '3m');
    result.push({
      Grau: 'subV/II',
      Acorde: changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2m']),
      Extenções: '(9, #11, 13) <br>' + '(' +
        Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '3M') + 'm7 → ' + changeNote + '7 → ' + Note.transpose(note, '2M') + 'm7'
    });

    result.push({
      Grau: '',
      Acorde: '',
      Notas: '',
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2M']),
      Extenções: '(#9, #11, 13) <br>' + '(' +
        Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '3M') + 'm7 → ' + changeNote + '7 → ' + Note.transpose(note, '2M') + 'm7'
    });

    // subV/III
    changeNote = Note.transpose(note, '4P');
    result.push({
      Grau: 'subV/III',
      Acorde: changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2m']),
      Extenções: '(9, #11, 13) <br>' + '(' +
        Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '4A') + 'm7 → ' + changeNote + '7 → ' + Note.transpose(note, '3M') + 'm7'
    });

    result.push({
      Grau: '',
      Acorde: '',
      Notas: '',
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2M']),
      Extenções: '(#9, #11, 13) <br>' + '(' +
        Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '4A') + 'm7 → ' + changeNote + '7 → ' + Note.transpose(note, '3M') + 'm7'
    });

    // subV/IV
    changeNote = Note.transpose(note, '4A');
    result.push({
      Grau: 'subV/IV',
      Acorde: changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2m']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '5P') + 'm7 → ' +changeNote + '7 → ' + Note.transpose(note, '4P') + 'maj7'
    });

    result.push({
      Grau: '',
      Acorde: '',
      Notas: '',
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2M']),
      Extenções: '(#9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '5P') + 'm7 → ' +changeNote + '7 → ' + Note.transpose(note, '4P') + 'maj7'
    });

    // subV/V
    changeNote = Note.transpose(note, '6m');
    result.push({
      Grau: 'subV/V',
      Acorde: changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2m']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '6M') + 'm7 → ' + changeNote + '7 → ' + Note.transpose(note, '5P') + '7'
    });

    result.push({
      Grau: '',
      Acorde: '',
      Notas: '',
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2M']),
      Extenções: '(#9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '6M') + 'm7 → ' + changeNote + '7 → ' + Note.transpose(note, '5P') + '7'
    });

    // subV/VI
    changeNote = Note.transpose(note, '7m');
    result.push({
      Grau: 'subV/VI',
      Acorde: changeNote + '7',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2m']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2m') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '7M') + 'm7 → ' +changeNote + '7 → ' + Note.transpose(note, '6M') + 'm7'
    });

    result.push({
      Grau: '',
      Acorde: '',
      Notas: '',
      Escalas: this.tonalService.GetScales(changeNote, [], [], ['3M', '5P', '7m', '6M', '4A', '2M']),
      Extenções: '(#9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: Note.transpose(note, '7M') + 'm7 → ' +changeNote + '7 → ' + Note.transpose(note, '6M') + 'm7'
    });

    return result;
  }

  loadChords(chord: INoteExtended) {
    this.tonalService.pushChord(chord);
  }
}
