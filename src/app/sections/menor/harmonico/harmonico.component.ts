import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';

@Component({
  selector: 'app-harmonico',
  templateUrl: './harmonico.component.html',
  styleUrls: ['./harmonico.component.css']
})
export class HarmonicoComponent implements OnInit {
  header = ['Roman', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  harmonicMode: INotes[] = [];

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.harmonicMode = this.GetMinorHarmonicMode(note);
    });
  }

  ngOnInit(): void {
  }

  GetMinorHarmonicMode(note: string) {
    const minorMode: INotes[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Romano: 'ImMaj7',
      Acorde: chordNote + 'mMaj7',
      Notas: Chord.get(chordNote + 'mM7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['harmonic minor']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Romano: 'IIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Romano: 'IIImaj7#5',
      Acorde: chordNote + 'maj7#5',
      Notas: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['lydian augmented']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4P') + ')',
      Cadência: '',
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Romano: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
    });

    // V7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Romano: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Romano: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M')
        + ', ' + Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Romano: 'VIIdim7',
      Acorde: chordNote + 'dim7',
      Notas: Chord.get(chordNote + 'dim7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['diminished whole tone']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }

}
