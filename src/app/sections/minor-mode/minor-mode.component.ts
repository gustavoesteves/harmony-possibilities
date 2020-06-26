import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';

@Component({
  selector: 'app-minor-mode',
  templateUrl: './minor-mode.component.html',
  styleUrls: ['./minor-mode.component.css']
})
export class MinorModeComponent implements OnInit {
  header = ['Chord', 'Notes', 'Scales', 'Extended'];
  minorMode: INoteExtended[] = [];
  harmonicMode: INoteExtended[] = [];
  melodicMode: INoteExtended[] = [];
  dorianMode: INoteExtended[] = [];
  phrygianMode: INoteExtended[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.minorMode = this.GetMinorNaturalMode(note);
      this.harmonicMode = this.GetMinorHarmonicMode(note);
      this.melodicMode = this.GetMinorMelodicMode(note);
      this.dorianMode = this.GetMinorDorianMode(note);
      this.phrygianMode = this.GetMinorPhrygianMode(note);
    });
  }

  GetMinorNaturalMode(note: string) {
    const minorMode: INoteExtended[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Roman: 'Im7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IVm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // Vm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(11) <br>' + '(' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Roman: 'VImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VII7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    return minorMode;
  }

  GetMinorHarmonicMode(note: string) {
    const minorMode: INoteExtended[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Roman: 'ImMaj7',
      Chord: chordNote + 'mMaj7',
      Notes: Chord.get(chordNote + 'mM7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['harmonic minor']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7#5',
      Chord: ' <br>' + chordNote + 'maj7#5',
      Notes: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['lydian augmented']),
      Extended: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4P') + ')',
      Cadence: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IVm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // V7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'V7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Roman: 'VImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M')
        + ', ' + Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Roman: 'VIIdim7',
      Chord: chordNote + 'dim7',
      Notes: Chord.get(chordNote + 'dim7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['diminished whole tone']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    return minorMode;
  }

  GetMinorMelodicMode(note: string) {
    const minorMode: INoteExtended[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Roman: 'ImMaj7',
      Chord: chordNote + 'mMaj7',
      Notes: Chord.get(chordNote + 'mM7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['melodic minor']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7#5',
      Chord: chordNote + 'maj7#5',
      Notes: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['lydian augmented']),
      Extended: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4A') + ')',
      Cadence: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IV7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'V7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Roman: 'VIm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Roman: 'VIIm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    return minorMode;
  }

  GetMinorDorianMode(note: string) {
    const minorMode: INoteExtended[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Roman: 'Im7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IV7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Roman: 'VIm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VIImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    return minorMode;
  }

  GetMinorPhrygianMode(note: string) {
    const minorMode: INoteExtended[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Roman: 'Im7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2m');
    minorMode.push({
      Roman: 'IImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'III7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IVm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Roman: 'VImaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4P') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VIIm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    return minorMode;
  }

  loadChords(chord: string) {
    this.tonalService.pushMode('draw');
    this.tonalService.pushChord(chord);
  }

}
