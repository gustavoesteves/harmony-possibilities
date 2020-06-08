import { Component, OnInit } from '@angular/core';
import { Chord, Note, Scale } from "@tonaljs/tonal";
import { INotes } from "../../services/interfaces/notes.interface";
import { TonalService } from "../../services/tonal.service";

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  header = ["Chord", "Notes", "Scales", "Extended"];
  majorMode: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const _note = value[value.length - 1];
      this.majorMode = this.GetMajorMode(_note);
    });
  }

  GetMajorMode(_note: string) {
    let _majorMode: INotes[] = [];
    let _chordNote: string = "";

    // Imaj7
    _majorMode.push({
      Chord: "Imaj7 <br>" + _note + "maj7",
      Notes: Chord.get(_note + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_note, ["major", "lydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_note, "2M") + ", " + Note.transpose(_note, "6M") + ")",
      Cadence: ""
    });

    // IIm7
    _chordNote = Note.transpose(_note, "2M");
    _majorMode.push({
      Chord: "IIm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IIIm7
    _chordNote = Note.transpose(_note, "3M");
    _majorMode.push({
      Chord: "IIIm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(11) <br>" + "(" + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // IVmaj7
    _chordNote = Note.transpose(_note, "4M");
    _majorMode.push({
      Chord: "IVmaj7 <br>" + _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4A") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // V7
    _chordNote = Note.transpose(_note, "5M");
    _majorMode.push({
      Chord: "V7 <br>" + _chordNote + "7",
      Notes: Chord.get(_chordNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["mixolydian"]),
      Extended: "(9, 13) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")",
      Cadence: ""
    });

    // VIm7
    _chordNote = Note.transpose(_note, "6M");
    _majorMode.push({
      Chord: "VIm7 <br>" + _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(9, 11) <br>" + "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")",
      Cadence: ""
    });

    // VIm7
    _chordNote = Note.transpose(_note, "7M");
    _majorMode.push({
      Chord: "VIIm7b5 <br>" + _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(11, b13) <br>" + "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")",
      Cadence: ""
    });

    return _majorMode;
  }
}
