import { Component, OnInit } from '@angular/core';
import { Chord, Note, Scale } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { TonalService } from '../../../services/tonal.service';

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  header = ['Romano', 'Acorde', 'Notas', 'Escalas', 'Extenções'];
  majorMode: INotes[] = [];

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.majorMode = this.GetMajorMode(note);
    });
  }

  GetMajorMode(note: string) {
    const majorMode: INotes[] = [];
    let chordNote = '';

    // Imaj7
    majorMode.push({
      Romano: 'Imaj7',
      Acorde: note + 'maj7',
      Notas: Chord.get(note + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(note, ['Jônico'], [], []),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(note, '2M') + ', ' + Note.transpose(note, '6M') + ')',
      Cadência: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    majorMode.push({
      Romano: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['Dórico'], [], []),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '3M');
    majorMode.push({
      Romano: 'IIIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['Frígio'], [], []),
      Extenções: '(11) <br>' + '(' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '4M');
    majorMode.push({
      Romano: 'IVmaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['Lídio'], [], []),
      Extenções: '(9, #11, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' +
        Note.transpose(chordNote, '4A') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    // V7
    chordNote = Note.transpose(note, '5M');
    majorMode.push({
      Romano: 'V7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['Mixolídio'], [], []),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    // VIm7
    chordNote = Note.transpose(note, '6M');
    majorMode.push({
      Romano: 'VIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['Eólico'], [], []),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // VIm7
    chordNote = Note.transpose(note, '7M');
    majorMode.push({
      Romano: 'VIIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['Lócrio'], [], []),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: ''
    });

    return majorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }
}
