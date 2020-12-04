import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';

@Component({
  selector: 'app-dorico',
  templateUrl: './dorico.component.html',
  styleUrls: ['./dorico.component.css']
})
export class DoricoComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
  dorianMode: INotes[] = [];

  constructor(private tonalService: TonalService) { 
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.dorianMode = this.GetMinorDorianMode(note);
    });
  }

  ngOnInit(): void {
  }
  
  GetMinorDorianMode(note: string) {
    const minorMode: INotes[] = [];
    let chordNote = '';

    // Im7
    chordNote = Note.transpose(note, '1P');
    minorMode.push({
      Romano: 'Im7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Romano: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Romano: 'IIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Romano: 'IV7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Romano: 'Vm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: ''
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Romano: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: ''
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Romano: 'VIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: ''
    });

    return minorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }

}
