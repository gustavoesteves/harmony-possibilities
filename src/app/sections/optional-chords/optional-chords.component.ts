import { Component, OnInit } from '@angular/core';
import { Chord, Note, Scale } from "@tonaljs/tonal";
import { INotes } from "../../services/interfaces/notes.interface";
import { TonalService } from "../../services/tonal.service";

@Component({
  selector: 'app-optional-chords',
  templateUrl: './optional-chords.component.html',
  styleUrls: ['./optional-chords.component.css']
})
export class OptionalChordsComponent implements OnInit {
  header = ["Chord", "Notes", "Scales", "Extended"];
  majorMode: INotes[] = [];
  alteredDominant: INotes[] = [];
  symetricDominant: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const _note = value[value.length - 1]
      this.majorMode = this.GetOptionalChords(_note);
      this.alteredDominant = this.GetAlteredDominant(_note);
      this.symetricDominant = this.GetSymetricDominant(_note);
    });
  }

  GetOptionalChords(_note: string) {
    let _result: INotes[] = [];

    // Fifth
    const _fifithNote = Note.transpose(_note, "5P");

    _result.push({
      Chord: _fifithNote + "7b9, <br>" + _fifithNote + "7#9, <br>" + _fifithNote + "13b9",
      Notes: Chord.get(_fifithNote + "7b9").notes.toString() + ", <br>" + Chord.get(_fifithNote + "7#9").notes.toString() + ", <br>" + Chord.get(_fifithNote + "13b9").notes.toString(),
      Scales: this.tonalService.GetScales(_fifithNote, ["half-whole diminished"]),
      Extended: "(" + Note.transpose(_fifithNote, "2m") + ", " + Note.transpose(_fifithNote, "6M") + ")",
      Cadence: ""
    });

    _result.push({
      Chord: _fifithNote + "7b9b13",
      Notes: Chord.get(_fifithNote + "7b9b13").notes.toString(),
      Scales: this.tonalService.GetScales(_fifithNote, ["phrygian dominant"]),
      Extended: "(" + Note.transpose(_fifithNote, "2m") + ", " + Note.transpose(_fifithNote, "6m") + ")",
      Cadence: ""
    });

    return _result;
  }

  GetAlteredDominant(_note: string) {
    let _result: INotes[] = [];

    // Fifth
    const _fifithNote = Note.transpose(_note, "5P");

    _result.push({
      Chord: _fifithNote + "7b5b9, <br>" + _fifithNote + "9b5b13, <br>" + _fifithNote + "7b5b9b13",
      Notes: Chord.get(_fifithNote + "7b5b9").notes.toString() + ", <br>" + Chord.get(_fifithNote + "9b5b13").notes.toString() + ", <br>" + Chord.get(_fifithNote + "7b5b9b13").notes.toString(),
      Scales: "",
      Extended: "(" + Note.transpose(_fifithNote, "2m") + ", " + Note.transpose(_fifithNote, "3m") + ", " + Note.transpose(_fifithNote, "6m") + ")",
      Cadence: ""
    });

    return _result;
  }

  GetSymetricDominant(_note: string) {
    let _result: INotes[] = [];

    // Fifth
    const _fifithNote = Note.transpose(_note, "5P");

    _result.push({
      Chord: _fifithNote + "7#9#11, <br>" + _fifithNote + "13#9#11, <br>" + _fifithNote + "13b9#11",
      Notes: Chord.get(_fifithNote + "7#9#11").notes.toString() + ", <br>" + Chord.get(_fifithNote + "13#9#11").notes.toString() + ", <br>" + Chord.get(_fifithNote + "13b9#11").notes.toString(),
      Scales: "",
      Extended: "(" + Note.transpose(_fifithNote, "2m") + ", " + Note.transpose(_fifithNote, "3m") + ", " + Note.transpose(_fifithNote, "4A")+ ", " + Note.transpose(_fifithNote, "6M") + ")",
      Cadence: ""
    });

    return _result;
  }

  GetLocalScale(_note: string, _chord: string) {
    let _result = "";
    for (const _scales of Scale.extended(_chord)) {
      for (const _notes of Scale.get(_note + " " + _scales).notes) {
        _result += _notes + ", ";
      }
      _result += _result.substr(0, _result.length - 2) + "<br>";
    }
    return "";
  }
}
