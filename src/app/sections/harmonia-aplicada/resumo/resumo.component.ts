import { Component, OnInit } from '@angular/core';
import { Note } from '@tonaljs/tonal';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { TonalService } from 'src/app/services/tonal.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  header = ['Grau', 'Acorde'];
  headerDominanteSecundaria = ['Grau', 'Acorde'];
  headerProgressao = ['Grau', 'Acorde'];
  headerHomonimo = ['Grau', 'Acorde'];
  majorList: INotesSimple[] = [];
  majorListDominanteSecundaria: INotesSimple[] = [];
  majorListProgressao: INotesSimple[] = [];
  majorListHomonimo: INotesSimple[] = [];
  
  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
    this.tonalService.currentTonality.subscribe(value => {
      const note = value[value.length - 1];
      this.majorList = this.GetMajorMode(note);
      this.majorListDominanteSecundaria = this.GetDominanteSecundaria(note);
      this.majorListProgressao = this.GetProgressao(note);
    });
  }

  GetMajorMode(note: string) {
    const majorMode: INotesSimple[] = [];
    let chordNote = '';

    // Imaj7
    majorMode.push({
      Grau: 'I',
      Acorde: note + 'maj7'
    });

    // IIm7
    chordNote = Note.transpose(note, '2M');
    majorMode.push({
      Grau: 'II-',
      Acorde: chordNote + 'm7'
    });

    // IIIm7
    chordNote = Note.transpose(note, '3M');
    majorMode.push({
      Grau: 'III-',
      Acorde: chordNote + 'm7'
    });

    // IVmaj7
    chordNote = Note.transpose(note, '4M');
    majorMode.push({
      Grau: 'IV',
      Acorde: chordNote + 'maj7'
    });

    // V7
    chordNote = Note.transpose(note, '5M');
    majorMode.push({
      Grau: 'V',
      Acorde: chordNote + '7'
    });

    // VIm7
    chordNote = Note.transpose(note, '6M');
    majorMode.push({
      Grau: 'VI-',
      Acorde: chordNote + 'm7'
    });

    // VIm7
    chordNote = Note.transpose(note, '7M');
    majorMode.push({
      Grau: 'VII- b5',
      Acorde: chordNote + 'm7b5'
    });

    return majorMode;
  }

  GetDominanteSecundaria(note: string) {
    const majorMode: INotesSimple[] = [];
    let chordNote = '';

    majorMode.push({
      Grau: 'V/IV',
      Acorde: note + '7'
    });

    majorMode.push({
      Grau: 'V/V',
      Acorde: Note.transpose(note, '2M') + '7'
    });

    majorMode.push({
      Grau: 'V/VI',
      Acorde: Note.transpose(note, '3M') + '7'
    });

    majorMode.push({
      Grau: '-',
      Acorde: '-'
    });

    majorMode.push({
      Grau: '-',
      Acorde: '-'
    });
    
    majorMode.push({
      Grau: 'V/II',
      Acorde: Note.transpose(note, '6M') + '7'
    });

    majorMode.push({
      Grau: 'V/III ou V7b5/III',
      Acorde: Note.transpose(note, '7M') + '7'
    });

    return majorMode;
  }

  GetProgressao(note: string) {
    const majorMode: INotesSimple[] = [];
    let chordNote = '';

    majorMode.push({
      Grau: 'II-' + ' &#8594; ' + 'V/IV ou II-7b5' + ' &#8594; ' + 'V/IV',
      Acorde: Note.transpose(note, '5P') + 'm7'
    });

    majorMode.push({
      Grau: 'II-' + ' &#8594; ' + 'V/V ou II-7b5' + ' &#8594; ' + 'V/V',
      Acorde: Note.transpose(note, '6M') + 'm7b5'
    });

    majorMode.push({
      Grau: 'II-' + ' &#8594; ' + 'V/VI ou II-7b5' + ' &#8594; ' + 'V/VI',
      Acorde: Note.transpose(note, '7M') + 'm7'
    });

    majorMode.push({
      Grau: '-',
      Acorde: '-'
    });

    majorMode.push({
      Grau: '-',
      Acorde: '-'
    });
    
    majorMode.push({
      Grau: 'V/II',
      Acorde: Note.transpose(note, '6M') + '7'
    });

    majorMode.push({
      Grau: 'V/III ou V7b5/III',
      Acorde: Note.transpose(note, '7M') + '7'
    });

    return majorMode;
  }

  loadChords(chord: INotes) {
    this.tonalService.pushChord(chord);
  }

}

interface INotesSimple {
  Grau: string;
  Acorde: string;
}
