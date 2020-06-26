import { Component, OnInit } from '@angular/core';
import { Chord, Note, Scale } from '@tonaljs/tonal';
import { INoteExtended } from '../../services/interfaces/notesExtended.interface';
import { TonalService } from '../../services/tonal.service';

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  header = ['Chord', 'Notes', 'Scales', 'Extended'];
  majorMode: INoteExtended[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.majorMode = this.GetMajorMode(note);
    });
  }

  GetMajorMode(note: string) {
    const majorMode: INoteExtended[] = [];
    let chordNote = '';

    // Imaj7
    majorMode.push({
      Roman: 'Imaj7',
      Chord: note + 'maj7',
      Notes: Chord.get(note + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(note, ['major', 'lydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(note, '2M') + ', ' + Note.transpose(note, '6M') + ')',
      Cadence: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    majorMode.push({
      Roman: 'IIm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '3M');
    majorMode.push({
      Roman: 'IIIm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(11) <br>' + '(' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '4M');
    majorMode.push({
      Roman: 'IVmaj7',
      Chord: chordNote + 'maj7',
      Notes: Chord.get(chordNote + 'maj7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extended: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // V7
    chordNote = Note.transpose(note, '5M');
    majorMode.push({
      Roman: 'V7',
      Chord: chordNote + '7',
      Notes: Chord.get(chordNote + '7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extended: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadence: ''
    });

    // VIm7
    chordNote = Note.transpose(note, '6M');
    majorMode.push({
      Roman: 'VIm7',
      Chord: chordNote + 'm7',
      Notes: Chord.get(chordNote + 'm7').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extended: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadence: ''
    });

    // VIm7
    chordNote = Note.transpose(note, '7M');
    majorMode.push({
      Roman: 'VIIm7b5',
      Chord: chordNote + 'm7b5',
      Notes: Chord.get(chordNote + 'm7b5').notes.toString(),
      Scales: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extended: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadence: ''
    });

    return majorMode;
  }

  loadChords(chord: string) {
    this.tonalService.pushMode('draw');
    this.tonalService.pushChord(chord);
  }
}
