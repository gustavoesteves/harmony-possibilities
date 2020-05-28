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

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const _note = value[value.length - 1];
      this.secondaryDominants = this.GetSecondaryDominants(_note);
    });
  }

  GetSecondaryDominants(_note: string) {
    let _result: INotes[] = [];
    let _changeNote: string = "";

    // V7/IV
    _result.push({
      Chord: _note + "7 -> " + Note.transpose(_note, "4P") + "maj7",
      Notes: Chord.get(_note + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_note, ["mixolydian"]),
      Extended: "(" + Note.transpose(_note, "2M") + ", " + Note.transpose(_note, "6M") + ")"
    });

    // V7/V
    _changeNote = Note.transpose(_note, "2M");
    _result.push({
      Chord: _changeNote + "7 -> " + Note.transpose(_note, "5P") + "7",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
      Extended: "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "6M") + ")"
    });

    // V7/VI
    _changeNote = Note.transpose(_note, "3M");
    _result.push({
      Chord: _changeNote + "7 -> " + Note.transpose(_note, "6M") + "m7",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["mixolydian"]),
      Extended: "(" + Note.transpose(_changeNote, "2m") + ", " + Note.transpose(_changeNote, "3m") + ", " + Note.transpose(_changeNote, "6m") + ")"
    });

    // V7/III
    _changeNote = Note.transpose(_note, "7M");
    _result.push({
      Chord: _changeNote + "7 -> " + Note.transpose(_note, "3M") + "m7",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(_changeNote, ["altered"]),
      Extended: "(" + Note.transpose(_changeNote, "2m") + ", " + Note.transpose(_changeNote, "3m") + ", " + Note.transpose(_changeNote, "6m") + ")"
    });

    return _result;
  }

}
