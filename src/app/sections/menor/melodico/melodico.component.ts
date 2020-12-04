import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';

@Component({
  selector: 'app-melodico',
  templateUrl: './melodico.component.html',
  styleUrls: ['./melodico.component.css']
})
export class MelodicoComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
  melodicMode: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.melodicMode = this.GetMinorMelodicMode(note);
    });
   }

  ngOnInit(): void {
  }

  GetMinorMelodicMode(note: string) {
    const minorMode: INotes[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Romano: 'ImMaj7',
      Acorde: chordNote + 'mMaj7',
      Notas: Chord.get(chordNote + 'mM7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['melodic minor']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Romano: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Romano: 'IIImaj7#5',
      Acorde: chordNote + 'maj7#5',
      Notas: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['lydian augmented']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4A') + ')',
      Cadência: '',
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Romano: 'IV7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Romano: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Romano: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Romano: 'VIIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }
  
}
