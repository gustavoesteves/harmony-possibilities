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
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
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
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // Vm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(11) <br>' + '(' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // VI'''maj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Roman: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VII7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
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
      Acorde: chordNote + 'mMaj7',
      Notas: Chord.get(chordNote + 'mM7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['harmonic minor']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7#5',
      Acorde: ' <br>' + chordNote + 'maj7#5',
      Notas: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['lydian augmented']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4P') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // V7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Roman: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M')
        + ', ' + Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Roman: 'VIIdim7',
      Acorde: chordNote + 'dim7',
      Notas: Chord.get(chordNote + 'dim7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['diminished whole tone']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
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
      Acorde: chordNote + 'mMaj7',
      Notas: Chord.get(chordNote + 'mM7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['melodic minor']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7#5',
      Acorde: chordNote + 'maj7#5',
      Notas: Chord.get(chordNote + 'maj7#5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['lydian augmented']),
      Extenções: '(9, #11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4A') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IV7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Roman: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // VIIm7b5
    chordNote = Note.transpose(note, '7M');
    minorMode.push({
      Roman: 'VIIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '3M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
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
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IV7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Roman: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
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
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIm7
    chordNote = Note.transpose(note, '2m');
    minorMode.push({
      Roman: 'IImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'III7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IVm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // VImaj7
    chordNote = Note.transpose(note, '6m');
    minorMode.push({
      Roman: 'VImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4P') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VIIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    return minorMode;
  }

  loadChords(chord: INoteExtended) {
    this.tonalService.pushChord(chord);
  }

}
