import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-secondary-dominants',
  templateUrl: './secondary-dominants.component.html',
  styleUrls: ['./secondary-dominants.component.css']
})
export class SecondaryDominantsComponent implements OnInit {
  header = ["Chord", "Notes", "Scales", "Extended"];
  secondaryDominants: INotes[] = [];
  extendedEg1: string = "";
  extendedEg2: string = "";
  progressionEg1: string = "";
  progressionEg2: string = "";
  progressionEg3: string = "";
  progressionEg4: string = "";
  progressionEg5: string = "";

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const _note = value[value.length - 1];
      this.secondaryDominants = this.GetSecondaryDominants(_note);

      this.extendedEg1 =
        Note.transpose(_note, "3M") + "7 -> " + Note.transpose(_note, "6M") + "7 -> " +
        Note.transpose(_note, "2M") + "7 -> " + Note.transpose(_note, "5P") + "7 -> " + _note + "maj7 (e.g.)";
      this.extendedEg2 =
        Note.transpose(_note, "2M") + "7 -> " + Note.transpose(_note, "5P") + "7 -> " + _note + "7 -> " +
        Note.transpose(_note, "4P") + "maj7 -> " + Note.transpose(_note, "7M") + "7 -> " +
        Note.transpose(_note, "3M") + "7 -> " + Note.transpose(_note, "6M") + "7 -> " +
        Note.transpose(_note, "2M") + "m7 (e.g.)";

      this.progressionEg1 = "II of V7/IV <br>" +
        "[" + Note.transpose(_note, "5P") + "m7 -> " + _note + "7] -> " + Note.transpose(_note, "4P") + "maj7 (e.g.) <br>" +
        "[" + Note.transpose(_note, "5P") + "mb57 -> " + _note + "7] -> " + Note.transpose(_note, "4P") + "maj7 (e.g.)";
      this.progressionEg2 = "II of V7/VI <br>" +
        "[" + Note.transpose(_note, "7M") + "m7 -> " + Note.transpose(_note, "3M") + "7] -> " + Note.transpose(_note, "6M") + "m7 (e.g.) <br>" +
        "[" + Note.transpose(_note, "7M") + "m7b5 -> " + Note.transpose(_note, "3M") + "7] -> " + Note.transpose(_note, "6M") + "m7 (e.g.)";
      this.progressionEg3 = "II of V7/II <br>" + "[" +
        Note.transpose(_note, "3M") + "m7 -> " + Note.transpose(_note, "6M") + "7] -> " + Note.transpose(_note, "2M") + "m7 (e.g.) <br> [" +
        Note.transpose(_note, "3M") + "m7b5 -> " + Note.transpose(_note, "6M") + "7] -> " + Note.transpose(_note, "2M") + "m7 (e.g.)";
      this.progressionEg4 = "II of V7/III <br>" + "[" +
        Note.transpose(_note, "4A") + "m7 -> " + Note.transpose(_note, "7M") + "7] -> " + Note.transpose(_note, "3M") + "m7 (e.g.) <br> [" +
        Note.transpose(_note, "4A") + "m7b5 -> " + Note.transpose(_note, "7M") + "7] -> " + Note.transpose(_note, "3M") + "m7 (e.g.)";
      this.progressionEg5 = "II of V7/V <br>" + "[" +
        Note.transpose(_note, "6M") + "m7 -> " + Note.transpose(_note, "2M") + "7] -> " + Note.transpose(_note, "5P") + "7 (e.g.) <br> [" +
        Note.transpose(_note, "6M") + "m7b5 -> " + Note.transpose(_note, "2M") + "7] -> " + Note.transpose(_note, "5P") + "7 (e.g.)";
    });
  }

  GetSecondaryDominants(_note: string) {
    let _result: INotes[] = [];
    let _changeNote: string = "";

    // V7/IV
    _result.push({
      Chord: "V7/IV -> VI <br>" + _note + "7 -> " + Note.transpose(_note, "4P") + "maj7",
      Notes: Chord.get(_note + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_note, ["mixolydian"]),
      Extended: "(" + Note.transpose(_note, "2M") + ", " + Note.transpose(_note, "6M") + ")",
      Cadence: ""
    });

    // V7/V
    _changeNote = Note.transpose(_note, "2M");
    _result.push({
      Chord: "V7/V -> V <br>" + _changeNote + "7 -> " + Note.transpose(_note, "5P") + "7",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
      Extended: "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: ""
    });

    // V7/VI
    _changeNote = Note.transpose(_note, "3M");
    _result.push({
      Chord: "V7/VI -> VI <br>" + _changeNote + "7 -> " + Note.transpose(_note, "6M") + "m7",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
      Extended: "(" + Note.transpose(_changeNote, "2m") + ", " + Note.transpose(_changeNote, "3m") + ", " + Note.transpose(_changeNote, "6m") + ")",
      Cadence: ""
    });

    // V7/III
    _changeNote = Note.transpose(_note, "7M");
    _result.push({
      Chord: "V7/III -> III <br>" + _changeNote + "7 -> " + Note.transpose(_note, "3M") + "m7, <br>" + _changeNote + "7b5 -> " + Note.transpose(_note, "3M") + "m7",
      Notes: Chord.get(_changeNote + "7").notes.toString() + "<br>" + Chord.get(_changeNote + "7b5").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["mixolydian", "altered"]),
      Extended: "(" + Note.transpose(_changeNote, "2m") + ", " + Note.transpose(_changeNote, "3m") + ", " + Note.transpose(_changeNote, "6m") + ")",
      Cadence: ""
    });

    // V7/II
    _changeNote = Note.transpose(_note, "6M");
    _result.push({
      Chord: "V7/II -> II <br>" + _changeNote + "7 -> " + Note.transpose(_note, "2M") + "m7",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
      Extended: "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "6m") + ")",
      Cadence: ""
    });

    return _result;
  }
}
