import { Component, OnInit } from '@angular/core';
import { INoteExtended } from 'src/app/services/interfaces/notesExtended.interface';
import { TonalService } from 'src/app/services/tonal.service';
import { Note, Chord } from '@tonaljs/tonal';

@Component({
  selector: 'app-dorico',
  templateUrl: './dorico.component.html',
  styleUrls: ['./dorico.component.css']
})
export class DoricoComponent implements OnInit {
  header = ['Acorde', 'Notas', 'Escalas', 'Extenções'];
  dorianMode: INoteExtended[] = [];

  constructor(private tonalService: TonalService) { 
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.dorianMode = this.GetMinorDorianMode(note);
    });
  }

  ngOnInit(): void {
  }
  
  GetMinorDorianMode(note: string) {
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
    chordNote = Note.transpose(note, '2M');
    minorMode.push({
      Roman: 'IIm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2m') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIImaj7
    chordNote = Note.transpose(note, '3m');
    minorMode.push({
      Roman: 'IIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVm7
    chordNote = Note.transpose(note, '4P');
    minorMode.push({
      Roman: 'IV7',
      Acorde: chordNote + '7',
      Notas: Chord.get(chordNote + '7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['mixolydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IIIm7
    chordNote = Note.transpose(note, '5P');
    minorMode.push({
      Roman: 'Vm7',
      Acorde: chordNote + 'm7',
      Notas: Chord.get(chordNote + 'm7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['dorian', 'phrygian', 'aeolian']),
      Extenções: '(9, 11) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '4M') + ')',
      Cadência: '',
      Acordes: []
    });

    // IVmaj7
    chordNote = Note.transpose(note, '6M');
    minorMode.push({
      Roman: 'VIm7b5',
      Acorde: chordNote + 'm7b5',
      Notas: Chord.get(chordNote + 'm7b5').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['locrian', 'half-diminished']),
      Extenções: '(11, b13) <br>' + '(' + Note.transpose(chordNote, '4M') + ', ' + Note.transpose(chordNote, '6m') + ')',
      Cadência: '',
      Acordes: []
    });

    // VII7
    chordNote = Note.transpose(note, '7m');
    minorMode.push({
      Roman: 'VIImaj7',
      Acorde: chordNote + 'maj7',
      Notas: Chord.get(chordNote + 'maj7').notes.toString(),
      Escalas: this.tonalService.GetScales(chordNote, ['major', 'lydian']),
      Extenções: '(9, 13) <br>' + '(' + Note.transpose(chordNote, '2M') + ', ' + Note.transpose(chordNote, '6M') + ')',
      Cadência: '',
      Acordes: []
    });

    return minorMode;
  }

  loadChords(chord: INoteExtended) {
    this.tonalService.pushChord(chord);
  }

}
