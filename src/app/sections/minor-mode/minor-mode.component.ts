import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-minor-mode',
  templateUrl: './minor-mode.component.html',
  styleUrls: ['./minor-mode.component.css']
})
export class MinorModeComponent implements OnInit {
  header = ["Chord", "Notes", "Scales", "Extended"];
  minorMode: INotes[] = [];
  harmonicMode: INotes[] = [];
  melodicMode: INotes[] = [];
  dorianMode: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const _note = value[value.length - 1];
      this.minorMode = this.GetMinorNaturalMode(_note);
      this.harmonicMode = this.GetMinorHarmonicMode(_note);
      this.melodicMode = this.GetMinorMelodicMode(_note);
      this.dorianMode = this.GetMinorDorianMode(_note);
    });
  }

  GetMinorNaturalMode(note: string) {
    let _minorMode: INotes[] = [];
    let _chordNote: string = "";

    // Im7
    _chordNote = Note.transpose(note, "1P");
    _minorMode.push({
      Chord: "Im7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIm7
    _chordNote = Note.transpose(note, "2M");
    _minorMode.push({
      Chord: "IIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    // IIImaj7
    _chordNote = Note.transpose(note, "3m");
    _minorMode.push({
      Chord: "IIImaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // IVm7
    _chordNote = Note.transpose(note, "4P");
    _minorMode.push({
      Chord: "IVm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // Vm7
    _chordNote = Note.transpose(note, "5P");
    _minorMode.push({
      Chord: "Vm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(11) <br>" + "(" + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // VImaj7
    _chordNote = Note.transpose(note, "6m");
    _minorMode.push({
      Chord: "VImaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4A") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // VII7
    _chordNote = Note.transpose(note, "7m");
    _minorMode.push({
      Chord: "VII7 <br>" + _chordNote + "7",
      Notes: Chord.get(_chordNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["mixolydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    return _minorMode;
  }

  GetMinorHarmonicMode(note: string) {
    let _minorMode: INotes[] = [];
    let _chordNote: string = "";

    // Im7
    _chordNote = Note.transpose(note, "1P");
    _minorMode.push({
      Chord: "Im7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIm7
    _chordNote = Note.transpose(note, "2M");
    _minorMode.push({
      Chord: "IIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    // IIImaj7
    _chordNote = Note.transpose(note, "3m");
    _minorMode.push({
      Chord: "IIImaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // IVm7
    _chordNote = Note.transpose(note, "4P");
    _minorMode.push({
      Chord: "IVm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIIm7
    _chordNote = Note.transpose(note, "5P");
    _minorMode.push({
      Chord: "Vm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(11) <br>" + "(" + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // VImaj7
    _chordNote = Note.transpose(note, "6m");
    _minorMode.push({
      Chord: "VImaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4A") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // VIIm7b5
    _chordNote = Note.transpose(note, "7M");
    _minorMode.push({
      Chord: "VIImaj7b5 <br>" + _chordNote + "maj7b5",
      Notes: Chord.get(_chordNote + "M7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["lydian", "lydian augmented"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "3M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    return _minorMode;
  }

  GetMinorMelodicMode(note: string) {
    let _minorMode: INotes[] = [];
    let _chordNote: string = "";

    // Im7
    _chordNote = Note.transpose(note, "1P");
    _minorMode.push({
      Chord: "Im7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIm7
    _chordNote = Note.transpose(note, "2M");
    _minorMode.push({
      Chord: "IIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    // IIImaj7
    _chordNote = Note.transpose(note, "3m");
    _minorMode.push({
      Chord: "IIImaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // IVm7
    _chordNote = Note.transpose(note, "4P");
    _minorMode.push({
      Chord: "IVm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIIm7
    _chordNote = Note.transpose(note, "5P");
    _minorMode.push({
      Chord: "Vm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(11) <br>" + "(" + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IVmaj7
    _chordNote = Note.transpose(note, "6M");
    _minorMode.push({
      Chord: "VIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    // VIIm7b5
    _chordNote = Note.transpose(note, "7M");
    _minorMode.push({
      Chord: "VIIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "3M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    return _minorMode;
  }

  GetMinorDorianMode(note: string) {
    let _minorMode: INotes[] = [];
    let _chordNote: string = "";

    // Im7
    _chordNote = Note.transpose(note, "1P");
    _minorMode.push({
      Chord: "Im7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIm7
    _chordNote = Note.transpose(note, "2M");
    _minorMode.push({
      Chord: "IIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    // IIImaj7
    _chordNote = Note.transpose(note, "3m");
    _minorMode.push({
      Chord: "IIImaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // IVm7
    _chordNote = Note.transpose(note, "4P");
    _minorMode.push({
      Chord: "IVm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIIm7
    _chordNote = Note.transpose(note, "5P");
    _minorMode.push({
      Chord: "Vm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(11) <br>" + "(" + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IVmaj7
    _chordNote = Note.transpose(note, "6M");
    _minorMode.push({
      Chord: "VIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    // VIIm7b5
    _chordNote = Note.transpose(note, "7M");
    _minorMode.push({
      Chord: "VIIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "3M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    return _minorMode;
  }

}
