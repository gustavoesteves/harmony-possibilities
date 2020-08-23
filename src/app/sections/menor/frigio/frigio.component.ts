import { Component, OnInit } from '@angular/core';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-frigio',
  templateUrl: './frigio.component.html',
  styleUrls: ['./frigio.component.css']
})
export class FrigioComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
  phrygianMode: INoteExtended[] = [];

  constructor(private tonalService: TonalService) { 
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.phrygianMode = this.GetMinorPhrygianMode(note);
    });
  }

  ngOnInit(): void {
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
