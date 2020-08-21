import { Component, OnInit } from '@angular/core';
import { Chord, Note, Scale } from '@tonaljs/tonal';
import { INoteExtended } from '../../../services/interfaces/notesExtended.interface';
import { TonalService } from '../../../services/tonal.service';

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
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
      Acorde: note + 'maj7',
      Notas: Chord.get(note + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(note, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(note, '2M') + ', ' + Note.transpose(note, '6M') + ')',
      Cadência: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    majorMode.push({
      Roman: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '3M');
    majorMode.push({
      Roman: 'IIIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(11) <br>' + '(' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '4M');
    majorMode.push({
      Roman: 'IVmaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    // V7
    chordNote = Note.transpose(note, '5M');
    majorMode.push({
      Roman: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    // VIm7
    chordNote = Note.transpose(note, '6M');
    majorMode.push({
      Roman: 'VIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // VIm7
    chordNote = Note.transpose(note, '7M');
    majorMode.push({
      Roman: 'VIIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: ''
    });

    return majorMode;
  }

  loadChords(chord: string) {
    this.tonalService.pushMode('draw');
    this.tonalService.pushChord(chord);
  }
}
