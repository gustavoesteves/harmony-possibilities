import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { Note } from '@tonaljs/tonal';

@Component({
  selector: 'app-tabela-maior',
  templateUrl: './tabela-maior.component.html',
  styleUrls: ['./tabela-maior.component.css']
})
export class TabelaMaiorComponent implements OnInit {
  btnGrau = 'button primary small';
  btnAcorde = 'button small';
  notes = [
    { note: 'Imaj7' },
    { note: 'IIm7' },
    { note: 'IIIm7' },
    { note: 'IVmaj7' },
    { note: 'V7' },
    { note: 'VIm7' },
    { note: 'VIIm7b5' }
  ];
  note = '';

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      this.note = value[value.length - 1];
    });
  }

  changeAcorde() {
    this.notes[0].note = this.note + 'maj7';
    this.notes[1].note = Note.transpose(this.note, '2M') + 'm7';
    this.notes[2].note = Note.transpose(this.note, '3M') + 'm7';
    this.notes[3].note = Note.transpose(this.note, '4M') + 'maj7';
    this.notes[4].note = Note.transpose(this.note, '5M') + '7';
    this.notes[5].note = Note.transpose(this.note, '6M') + 'm7';
    this.notes[6].note = Note.transpose(this.note, '7M') + 'm7b5';
  }

  changeGrau() {
    this.notes[0].note = 'Imaj7';
    this.notes[1].note = 'IIm7';
    this.notes[2].note = 'IIIm7';
    this.notes[3].note = 'IVmaj7';
    this.notes[4].note = 'V7';
    this.notes[5].note = 'VIm7';
    this.notes[6].note = 'VIIm7b5';
  }

  changeView(ativo: string) {
    if (ativo === 'acorde') {
      this.btnGrau = 'button small';
      this.btnAcorde = 'button primary small';
      this.changeAcorde();
    }
    else if (ativo === 'grau') {
      this.btnGrau = 'button primary small';
      this.btnAcorde = 'button small';
      this.changeGrau();
    }
  }

  ngOnInit(): void {
  }

}
