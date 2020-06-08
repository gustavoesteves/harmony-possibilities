import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-substitute-dominants',
  templateUrl: './substitute-dominants.component.html',
  styleUrls: ['./substitute-dominants.component.css']
})
export class SubstituteDominantsComponent implements OnInit {
  header = ["Chord", "Notes", "Scales", "Extended", "Cadence"];
  substituteDominants: INotes[] = [];
  progressionEg1: string = "";

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const _note = value[value.length - 1];
      this.substituteDominants = this.GetSubstituteDominants(_note);

      // the "II V" SubV's
      this.progressionEg1 =
        "VIm7 II7 Vm7 I7 IVmaj7 <br>" +
        Note.transpose(_note, "6M") + "m7 " + Note.transpose(_note, "2M") + "7 " + 
        Note.transpose(_note, "5P") + "m7 " + Note.transpose(_note, "1P") + "7 " + Note.transpose(_note, "4P") + "maj7 (e.g.) <br><br>" +
        "VIm7 II7 Vm7 SubV/IV7 IVmaj7 <br>" +
        Note.transpose(_note, "6M") + "m7 " + Note.transpose(_note, "2M") + "7 " + 
        Note.transpose(_note, "5P") + "m7 " + Note.transpose(_note, "4A") + "7 " + Note.transpose(_note, "4P") + "maj7 (with SubV e.g.) <br><br>" +
        "VIm7 II7 SubV/I SubV/IV7 IVmaj7 <br>" +
        Note.transpose(_note, "6M") + "m7 " + Note.transpose(_note, "2M") + "7 " + 
        Note.transpose(_note, "1A") + "7 " + Note.transpose(_note, "4A") + "7 " + Note.transpose(_note, "4P") + "maj7 (with two SubV's e.g.) <br><br>" +
        "SubV/IIm7 SubV/V7 SubV/Im7 SubV/IV7 IVmaj7 <br>" +
        Note.transpose(_note, "3m") + "m7 " + Note.transpose(_note, "5A") + "7 " + 
        Note.transpose(_note, "1A") + "m7 " + Note.transpose(_note, "4A") + "7 " + Note.transpose(_note, "4P") + "maj7 (with four SubV's e.g.) <br><br>";
    });
  }

  GetSubstituteDominants(_note: string) {
    let _result: INotes[] = [];
    let _changeNote: string = "";

    // subV/I
    _changeNote = Note.transpose(_note, "2m");
    _result.push({
      Chord:
        "subV/I <br>" + _changeNote + "7 <br>",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(Note.transpose(_changeNote, "4A"), ["altered"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "4A") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: "[IIm7 subV/I] Imaj7 <br>" + "[" + Note.transpose(_note, "2M") + "m7 " + _changeNote + "7] " + _note + "maj7"
    });

    // subV/II
    _changeNote = Note.transpose(_note, "3m");
    _result.push({
      Chord:
        "subV/II <br>" + _changeNote + "7 <br>",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(Note.transpose(_changeNote, "4A"), ["altered"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "4A") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: "[IIIm7 subV/II] IIm7 <br>" + "[" + Note.transpose(_note, "3M") + "m7 " + _changeNote + "7] " + Note.transpose(_note, "2M") + "m7"
    });

    // subV/III
    _changeNote = Note.transpose(_note, "4P");
    _result.push({
      Chord:
        "subV/III <br>" + _changeNote + "7 <br>",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(Note.transpose(_changeNote, "4A"), ["altered"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "4A") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: "[#IVm7 subV/III] IIIm7 <br>" + "[" + Note.transpose(_note, "4A") + "m7 " + _changeNote + "7] " + Note.transpose(_note, "3M") + "m7"
    });

    // subV/IV
    _changeNote = Note.transpose(_note, "4A");
    _result.push({
      Chord:
        "subV/IV <br>" + _changeNote + "7 <br>",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(Note.transpose(_changeNote, "4A"), ["altered"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "4A") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: "[Vm7 subV/IV] IVmaj7 <br>" + "[" + Note.transpose(_note, "5P") + "m7 " + _changeNote + "7] " + Note.transpose(_note, "4P") + "maj7"
    });

    // subV/V
    _changeNote = Note.transpose(_note, "6m");
    _result.push({
      Chord:
        "subV/V <br>" + _changeNote + "7 <br>",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(Note.transpose(_changeNote, "4A"), ["altered"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "4A") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: "[VIm7 subV/V] V7 <br>" + "[" + Note.transpose(_note, "6M") + "m7 " + _changeNote + "7] " + Note.transpose(_note, "5P") + "7"
    });

    // subV/VI
    _changeNote = Note.transpose(_note, "7m");
    _result.push({
      Chord:
        "subV/VI <br>" + _changeNote + "7 <br>",
      Notes: Chord.get(_changeNote + "7").notes.toString(),
      Scales: this.tonalService.GetScales(Note.transpose(_changeNote, "4A"), ["altered"]),
      Extended: "(9, #11, 13) <br>" + "(" + Note.transpose(_changeNote, "2M") + ", " + Note.transpose(_changeNote, "4A") + ", " + Note.transpose(_changeNote, "6M") + ")",
      Cadence: "[VIIm7b5 subV/V] VIm7 <br>" + "[" + Note.transpose(_note, "7M") + "m7 " + _changeNote + "7] " + Note.transpose(_note, "6M") + "m7"
    });

    return _result;
  }

}
