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
      const _note = value[value.length - 1]
      this.majorMode = this.GetMajorMode(_note);
    });
  }

  GetMajorMode(_note: string) {
    let _majorMode: INotes[] = [];
    let _chordNote: string = "";

    // Imaj7
    _majorMode.push({
      Chord: _note + "maj7",
      Notes: Chord.get(_note + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_note, ["major", "lydian"]),
      Extended: "(" + Note.transpose(_note, "2M") + ", " + Note.transpose(_note, "6M") + ")"
    });

    // IIm7
    _chordNote = Note.transpose(_note, "2M");
    _majorMode.push({
      Chord: _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")"
    });

    // IIIm7
    _chordNote = Note.transpose(_note, "3M");
    _majorMode.push({
      Chord: _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(" + Note.transpose(_chordNote, "4M") + ")"
    });

    // IVmaj7
    _chordNote = Note.transpose(_note, "4M");
    _majorMode.push({
      Chord: _chordNote + "maj7",
      Notes: Chord.get(_chordNote + "maj7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["major", "lydian"]),
      Extended: "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4A") + ", " + Note.transpose(_chordNote, "6M") + ")"
    });

    // V7
    _chordNote = Note.transpose(_note, "5M");
    _majorMode.push({
      Chord: _chordNote + "7",
      Notes: Chord.get(_chordNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["mixolydian"]),
      Extended: "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "6M") + ")"
    });

    // VIm7
    _chordNote = Note.transpose(_note, "6M");
    _majorMode.push({
      Chord: _chordNote + "m7",
      Notes: Chord.get(_chordNote + "m7").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["dorian", "phrygian", "aeolian"]),
      Extended: "(" + Note.transpose(_chordNote, "2M") + ", " + Note.transpose(_chordNote, "4M") + ")"
    });

    // VIm7
    _chordNote = Note.transpose(_note, "7M");
    _majorMode.push({
      Chord: _chordNote + "m7b5",
      Notes: Chord.get(_chordNote + "m7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_chordNote, ["locrian", "half-diminished"]),
      Extended: "(" + Note.transpose(_chordNote, "4M") + ", " + Note.transpose(_chordNote, "6m") + ")"
    });

    return _majorMode;
  }
}
