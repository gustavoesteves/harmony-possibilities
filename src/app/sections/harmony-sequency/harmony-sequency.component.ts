import { Component, OnInit } from '@angular/core';
import { TonalService } from '../../services/tonal.service';
import { Note } from '@tonaljs/tonal';
import { IPhrases } from '../../services/interfaces/phrases.interface';
import { IRondo } from '../../services/interfaces/rondo.interface';

@Component({
  selector: 'app-harmony-sequency',
  templateUrl: './harmony-sequency.component.html',
  styleUrls: ['./harmony-sequency.component.css']
})
export class HarmonySequencyComponent implements OnInit {
  header: IRondo[] = [{ Compasso: 'Compasso', Frase1: 'Parte 1', Frase2: 'Parte 2', Frase3: 'Parte 3' }];
  body: IRondo[] = [
    { Compasso: '1', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '2', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '3', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '4', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '5', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '6', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '7', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '8', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '9', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '10', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '11', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '12', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '13', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '14', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '15', Frase1: '', Frase2: '', Frase3: '' },
    { Compasso: '16', Frase1: '', Frase2: '', Frase3: '' }
  ];
  note = '';
  frase: IPhrases[] = [];

  constructor(private tonalService: TonalService) {
  }

  ngOnInit(): void {
    this.tonalService.currentMotivo.subscribe(value => {
      this.frase = value[value.length - 1];
      this.GetCompasso(this.frase);
    });
    this.tonalService.currentTonality.subscribe(value => {
      this.note = value[value.length - 1];
      this.GetCompasso(this.frase);
    });
  }

  GetCompasso(frase: IPhrases[]) {
    for (let iMotivo = 0; iMotivo < frase.length; iMotivo++) {
      if (iMotivo === 0) {
        for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
          this.body[iCompasso - 1].Frase1 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
            this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), this.note);
        }
      } else if (iMotivo === 1) {
        for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
          this.body[iCompasso - 1].Frase2 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
            this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), Note.transpose(this.note, '5M'));
        }
      } else {
        for (let iCompasso = 1; iCompasso < frase[iMotivo].Comp.length + 1; iCompasso++) {
          this.body[iCompasso - 1].Frase3 = frase[iMotivo].Comp[iCompasso - 1].toString() + '<br>' +
            this.GetAllChords(frase[iMotivo].Comp[iCompasso - 1].toString(), Note.transpose(this.note, '4M'));
        }
      }
    }
    // gravando motivo
    this.tonalService.pushMotivoChords(this.body);
  }

  GetAllChords(chord: string, note: string): string {
    if (chord.indexOf(',') !== -1) {
      let result = '';
      result = this.GetChordName(chord.substr(0, chord.indexOf(',')), note);
      return result + ', ' + this.GetChordName(chord.substr(chord.indexOf(',') + 1, chord.length), note);
    } else {
      return this.GetChordName(chord, note);
    }
  }

  GetChordName(chord: string, note: string): string {
    switch (chord) {
      case 'I': {
        return note + 'maj7';
      }
      case 'II': {
        return Note.transpose(note, '2M') + 'm7';
      }
      case 'III': {
        return Note.transpose(note, '3M') + 'm7';
      }
      case 'IV': {
        return Note.transpose(note, '4M') + 'maj7';
      }
      case 'V': {
        return Note.transpose(note, '5M') + '7';
      }
      case 'VI': {
        return Note.transpose(note, '6M') + 'm7';
      }
      case 'VII': {
        return Note.transpose(note, '7M') + 'm7b5';
      }
      case 'V/II': {
        return Note.transpose(note, '6M') + '7';
      }
      case 'V/III': {
        return Note.transpose(note, '7M') + '7';
      }
      case 'V/IV': {
        return note + '7';
      }
      case 'V/V': {
        return Note.transpose(note, '2M') + '7';
      }
      case 'V/VI': {
        return Note.transpose(note, '2M') + '7';
      }
      case 'I6': {
        return Note.transpose(note, '3M') + '/' + note;
      }
      case 'I4': {
        return Note.transpose(note, '5M') + '/' + note;
      }
      case 'bIIIo': {
        return Note.transpose(note, '3m') + 'dim7';
      }
      case 'Vo/II': {
        return Note.transpose(note, '2m') + 'dim7';
      }
      case 'Vo/III': {
        return Note.transpose(note, '3m') + 'dim7';
      }
      case 'Vo/V': {
        return Note.transpose(note, '5m') + 'dim7';
      }
      case 'IVm': {
        return Note.transpose(note, '4M') + 'm7';
      }
      default: {
        break;
      }
    }
  }

  onClick() {
    this.tonalService.pushMotivo();
  }

  onClickXML() {
    this.tonalService.pushModeInit(['xmlmusic']);
  }

  loadChords(chord: string) { }

}
