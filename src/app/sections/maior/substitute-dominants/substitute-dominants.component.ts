import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-substitute-dominants',
  templateUrl: './substitute-dominants.component.html',
  styleUrls: ['./substitute-dominants.component.css']
})
export class SubstituteDominantsComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções', 'Cadência'];
  substituteDominants: INotes[] = [];
  progressionEg1 = '';

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.substituteDominants = this.GetSubstituteDominants(note);

      // the 'II V' SubV's
      this.progressionEg1 =
        'VIm7 II7 Vm7 I7 IVmaj7 <br>' +
        Note.transpose(note, '6M') + 'm7 ' + Note.transpose(note, '2M') + '7 ' +
        Note.transpose(note, '5P') + 'm7 ' + Note.transpose(note, '1P') + '7 ' +
        Note.transpose(note, '4P') + 'maj7 (ex.) <br><br>' +
        'VIm7 II7 Vm7 SubV/IV7 IVmaj7 <br>' +
        Note.transpose(note, '6M') + 'm7 ' + Note.transpose(note, '2M') + '7 ' +
        Note.transpose(note, '5P') + 'm7 ' + Note.transpose(note, '4A') + '7 ' +
        Note.transpose(note, '4P') + 'maj7 (com SubV ex.) <br><br>' +
        'VIm7 II7 SubV/I SubV/IV7 IVmaj7 <br>' +
        Note.transpose(note, '6M') + 'm7 ' + Note.transpose(note, '2M') + '7 ' +
        Note.transpose(note, '1A') + '7 ' + Note.transpose(note, '4A') + '7 ' +
        Note.transpose(note, '4P') + 'maj7 (com duas SubV ex.) <br> <br>' +
        'SubV/IIm7 SubV/V7 SubV/Im7 SubV/IV7 IVmaj7 <br>' +
        Note.transpose(note, '3m') + 'm7 ' + Note.transpose(note, '5A') + '7 ' +
        Note.transpose(note, '1A') + 'm7 ' + Note.transpose(note, '4A') + '7 ' +
        Note.transpose(note, '4P') + 'maj7 (com quatro SubV ex.)<br><br>';
    });
  }

  GetSubstituteDominants(note: string) {
    const result: INotes[] = [];
    let changeNote = '';

    // subV/I
    changeNote = Note.transpose(note, '2m');
    result.push({
      Acorde:
        'subV/I <br>' + changeNote + '7 <br>',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(Note.transpose(changeNote, '4A'), ['altered']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: '[IIm7 subV/I] Imaj7 <br>' + '[' + Note.transpose(note, '2M') + 'm7 ' + changeNote + '7] ' + note + 'maj7'
    });

    // subV/II
    changeNote = Note.transpose(note, '3m');
    result.push({
      Acorde:
        'subV/II <br>' + changeNote + '7 <br>',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(Note.transpose(changeNote, '4A'), ['altered']),
      Extenções: '(9, #11, 13) <br>' + '(' +
        Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: '[IIIm7 subV/II] IIm7 <br>' + '[' +
        Note.transpose(note, '3M') + 'm7 ' +
        changeNote + '7] ' +
        Note.transpose(note, '2M') + 'm7'
    });

    // subV/III
    changeNote = Note.transpose(note, '4P');
    result.push({
      Acorde:
        'subV/III <br>' + changeNote + '7 <br>',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(Note.transpose(changeNote, '4A'), ['altered']),
      Extenções: '(9, #11, 13) <br>' + '(' +
        Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' +
        Note.transpose(changeNote, '6M') + ')',
      Cadência: '[#IVm7 subV/III] IIIm7 <br>' + '[' +
        Note.transpose(note, '4A') + 'm7 ' +
        changeNote + '7] ' +
        Note.transpose(note, '3M') + 'm7'
    });

    // subV/IV
    changeNote = Note.transpose(note, '4A');
    result.push({
      Acorde:
        'subV/IV <br>' + changeNote + '7 <br>',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(Note.transpose(changeNote, '4A'), ['altered']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: '[Vm7 subV/IV] IVmaj7 <br>' + '[' + Note.transpose(note, '5P') + 'm7 ' +
        changeNote + '7] ' + Note.transpose(note, '4P') + 'maj7'
    });

    // subV/V
    changeNote = Note.transpose(note, '6m');
    result.push({
      Acorde:
        'subV/V <br>' + changeNote + '7 <br>',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(Note.transpose(changeNote, '4A'), ['altered']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: '[VIm7 subV/V] V7 <br>' + '[' + Note.transpose(note, '6M') + 'm7 ' +
        changeNote + '7] ' + Note.transpose(note, '5P') + '7'
    });

    // subV/VI
    changeNote = Note.transpose(note, '7m');
    result.push({
      Acorde:
        'subV/VI <br>' + changeNote + '7 <br>',
      Notas: Chord.get(changeNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(Note.transpose(changeNote, '4A'), ['altered']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(changeNote, '2M') + ', ' +
        Note.transpose(changeNote, '4A') + ', ' + Note.transpose(changeNote, '6M') + ')',
      Cadência: '[VIIm7b5 subV/V] VIm7 <br>' + '[' + Note.transpose(note, '7M') + 'm7 ' +
        changeNote + '7] ' + Note.transpose(note, '6M') + 'm7'
    });

    return result;
  }

  loadChords(chord: string) {
    this.tonalService.pushMode('draw');
    this.tonalService.pushChord(chord);
  }
}
