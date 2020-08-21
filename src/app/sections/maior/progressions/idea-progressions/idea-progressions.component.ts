import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';
import { Note } from '@tonaljs/tonal';
import { Modo } from 'src/app/services/enums/modo.enum';

@Component({
  selector: 'app-idea-progressions',
  templateUrl: './idea-progressions.component.html',
  styleUrls: ['./idea-progressions.component.css']
})
export class IdeaProgressionsComponent implements OnInit {
  header = ['Compasso', 'Acorde'];
  fraseGerada = [];
  modoFrase: Modo = Modo.Natural;
  modoNatural = 'button primary small';
  modoSetima = 'button small';
  modoInversao = 'button small';
  modoAlteracao = 'button small';
  modoSecundaria = 'button small';
  modoSub = 'button small';
  comp4 = 'button primary small';
  comp6 = 'button small';
  comp8 = 'button small';
  comp12 = 'button small';
  comp16 = 'button small';
  compNumber = 4;
  note = '';

  constructor(private tonalService: TonalService) {
    this.tonalService.currentTonality.subscribe(value => {
      this.note = value[value.length - 1];
    });
  }

  ngOnInit(): void {
  }

  loadChords(chord: number) {
    const chords = [];
    let count = 0;
    switch (chord) {
      case 0:
        chords.push(this.note);
        if (this.modoFrase > 1) {
          chords.push(this.note + 'maj7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '3M') + '/' + this.note);
          chords.push(Note.transpose(this.note, '5M') + '/' + this.note);
          chords.push(Note.transpose(this.note, '7M') + '/' + this.note);
        }
        if (this.modoFrase > 3) {
          chords.push(this.note + 'maj9');
          chords.push(this.note + 'maj13');
          chords.push(this.note + '6');
          chords.push(this.note + '6/9');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + this.note + '7' + '&#8594;' + Note.transpose(this.note, '4M') + 'maj7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 1:
        chords.push(Note.transpose(this.note, '2M') + 'm');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '2M') + 'm7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '4M') + '/' + Note.transpose(this.note, '2M') + 'm');
          chords.push(Note.transpose(this.note, '6M') + '/' + Note.transpose(this.note, '2M') + 'm');
          chords.push(Note.transpose(this.note, '1M') + '/' + Note.transpose(this.note, '2M') + 'm');
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '2M') + 'm9');
          chords.push(Note.transpose(this.note, '2M') + 'm11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '2M') + '7' + '&#8594;' + Note.transpose(this.note, '5M') + '7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 2:
        chords.push(Note.transpose(this.note, '3M') + 'm');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '3M') + 'm7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '5M') + '/' + Note.transpose(this.note, '3M') + 'm');
          chords.push(Note.transpose(this.note, '7M') + '/' + Note.transpose(this.note, '3M') + 'm');
          chords.push(Note.transpose(this.note, '2M') + '/' + Note.transpose(this.note, '3M') + 'm');
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '3M') + 'm11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '3M') + '7' + '&#8594;' + Note.transpose(this.note, '6M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 3:
        chords.push(Note.transpose(this.note, '4M'));
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '4M') + 'maj7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '6M') + '/' + Note.transpose(this.note, '4M'));
          chords.push(Note.transpose(this.note, '1M') + '/' + Note.transpose(this.note, '4M'));
          chords.push(Note.transpose(this.note, '3M') + '/' + Note.transpose(this.note, '4M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '4M') + 'maj9');
          chords.push(Note.transpose(this.note, '4M') + 'maj13');
          chords.push(Note.transpose(this.note, '4M') + '6');
          chords.push(Note.transpose(this.note, '4M') + '6/9');
          chords.push(Note.transpose(this.note, '4M') + 'maj7#11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '4M') + '7' + '&#8594;' + Note.transpose(this.note, '3M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 4:
        chords.push(Note.transpose(this.note, '5M'));
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '5M') + '7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '7M') + '/' + Note.transpose(this.note, '5M'));
          chords.push(Note.transpose(this.note, '2M') + '/' + Note.transpose(this.note, '5M'));
          chords.push(Note.transpose(this.note, '4M') + '/' + Note.transpose(this.note, '5M'));
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '5M') + '6');
          chords.push(Note.transpose(this.note, '5M') + '9');
          chords.push(Note.transpose(this.note, '5M') + '6/9');
        }
        if (this.modoFrase > 4) {
          chords.push(Note.transpose(this.note, '5M') + '7');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 5:
        chords.push(Note.transpose(this.note, '6M') + 'm');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '6M') + 'm7');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '1M') + '/' + Note.transpose(this.note, '6M') + 'm');
          chords.push(Note.transpose(this.note, '3M') + '/' + Note.transpose(this.note, '6M') + 'm');
          chords.push(Note.transpose(this.note, '5M') + '/' + Note.transpose(this.note, '6M') + 'm');
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '6M') + 'm9');
          chords.push(Note.transpose(this.note, '6M') + 'm11');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '6M') + '7' + '&#8594;' + Note.transpose(this.note, '2M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
      case 6:
        chords.push(Note.transpose(this.note, '7M') + 'dim');
        if (this.modoFrase > 1) {
          chords.push(Note.transpose(this.note, '7M') + 'm7b5');
        }
        if (this.modoFrase > 2) {
          chords.push(Note.transpose(this.note, '2M') + '/' + Note.transpose(this.note, '7M') + 'dim');
          chords.push(Note.transpose(this.note, '4M') + '/' + Note.transpose(this.note, '7M') + 'dim');
          chords.push(Note.transpose(this.note, '6M') + '/' + Note.transpose(this.note, '7M') + 'dim');
        }
        if (this.modoFrase > 3) {
          chords.push(Note.transpose(this.note, '7M') + 'm9b5');
        }
        if (this.modoFrase > 4) {
          chords.push('(' + Note.transpose(this.note, '7M') + '7' + '&#8594;' + Note.transpose(this.note, '3M') + 'm7 )');
        }
        count = Math.floor(Math.random() * chords.length);
        return chords[count];
    }
  }

  fraseGenarator() {
    this.fraseGerada = [];
    let firstChord = Math.floor(Math.random() * 6);
    this.fraseGerada.push({ Compasso: 1, Acorde: this.loadChords(firstChord) });
    for (let index = 1; index < this.compNumber; index++) {
      firstChord = this.findNext(firstChord);
      this.fraseGerada.push({ Compasso: index + 1, Acorde: this.loadChords(firstChord) });
    }
  }

  findNext(chord: number) {
    if (chord !== 0) {
      if (chord === 1) {
        // I V
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            return 0;
          case 1:
            return 4;
          default:
            break;
        }
      }
      if (chord === 2) {
        // II IV VI
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            return 1;
          case 1:
            return 3;
          case 2:
            return 5;
          default:
            break;
        }
      }
      if (chord === 3) {
        // I II 
        return Math.floor(Math.random() * 2);
      }
      if (chord === 4) {
        // I VI VII
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            return 0;
          case 1:
            return 5;
          case 2:
            return 6;
          default:
            break;
        }
      }
      if (chord === 5) {
        // II IV
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            return 1;
          case 1:
            return 3;
          default:
            break;
        }
      }
      if (chord === 6) {
        // I VI
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            return 0;
          case 1:
            return 5;
          default:
            break;
        }
      }
    }
    else {
      return Math.floor(Math.random() * 6);
    }

  }

  changeModoFrase(modo: Modo) {
    this.modoFrase = modo;
    if (modo === Modo.Natural) {
      this.modoNatural = 'button primary small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Setima) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button primary small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Inversão) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button primary small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Alteração) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button primary small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Secundária) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button primary small';
      this.modoSub = 'button small';
    }
    else if (modo === Modo.Subdominante) {
      this.modoNatural = 'button small';
      this.modoSetima = 'button small';
      this.modoInversao = 'button small';
      this.modoAlteracao = 'button small';
      this.modoSecundaria = 'button small';
      this.modoSub = 'button primary small';
    }
  }

  changeCompasso(value: number) {
    if (value === 4) {
      this.comp4 = 'button primary small';
      this.comp6 = 'button small';
      this.comp8 = 'button small';
      this.comp12 = 'button small';
      this.comp16 = 'button small';
      this.compNumber = 4;
    }
    else if (value === 6) {
      this.comp4 = 'button small';
      this.comp6 = 'button primary small';
      this.comp8 = 'button small';
      this.comp12 = 'button small';
      this.comp16 = 'button small';
      this.compNumber = 6;
    }
    else if (value === 8) {
      this.comp4 = 'button small';
      this.comp6 = 'button small';
      this.comp8 = 'button primary small';
      this.comp12 = 'button small';
      this.comp16 = 'button small';
      this.compNumber = 8;
    }
    else if (value === 12) {
      this.comp4 = 'button small';
      this.comp6 = 'button small';
      this.comp8 = 'button small';
      this.comp12 = 'button primary small';
      this.comp16 = 'button small';
      this.compNumber = 12;
    }
    else if (value === 16) {
      this.comp4 = 'button small';
      this.comp6 = 'button small';
      this.comp8 = 'button small';
      this.comp12 = 'button small';
      this.comp16 = 'button primary small';
      this.compNumber = 16;
    }
  }
  
}
