import { Component, OnInit } from '@angular/core';
import { TonalService } from 'src/app/services/tonal.service';

@Component({
  selector: 'app-escalas-acorde',
  templateUrl: './escalas-acorde.component.html',
  styleUrls: ['./escalas-acorde.component.css']
})
export class EscalasAcordeComponent implements OnInit {
  // notas checadas
  checkedNotes = [
    { note: 'C', checked: false, value: '1P' },
    { note: 'Db', checked: false, value: '2m' },
    { note: 'D', checked: false, value: '2M' },
    { note: 'Eb', checked: false, value: '3m' },
    { note: 'E', checked: false, value: '3M' },
    { note: 'F', checked: false, value: '4P' },
    { note: 'Gb', checked: false, value: '5d' },
    { note: 'G', checked: false, value: '5P' },
    { note: 'Ab', checked: false, value: '6m' },
    { note: 'A', checked: false, value: '6M' },
    { note: 'Bb', checked: false, value: '7m' },
    { note: 'B', checked: false, value: '7M' },
  ];
  checkedIntervals = [
    { note: 'T', checked: false, value: 0 },
    { note: '2m', checked: false, value: 0 },
    { note: '2M', checked: false, value: 0 },
    { note: '3m', checked: false, value: 0 },
    { note: '3M', checked: false, value: 0 },
    { note: '4J', checked: false, value: 0 },
    { note: '4a/5dim', checked: false, value: 0 },
    { note: '5J', checked: false, value: 0 },
    { note: '5a/6m', checked: false, value: 0 },
    { note: '6M', checked: false, value: 0 },
    { note: '7m', checked: false, value: 0 },
    { note: '7M', checked: false, value: 0 }
  ];
  notesTriade = [];
  menuAtivo = 'notas';
  btnNotas = 'button primary small';
  btnIntervalos = 'button small';
  escalas = [];
  header = ['Escalas'];

  constructor(private tonalService: TonalService) { }

  ngOnInit(): void {
  }

  changeView(ativo: string) {
    this.menuAtivo = ativo;
    this.btnNotas === "intervalor" ? 'button small' : 'button primary small';
    this.btnIntervalos === "intervalor" ? 'button small' : 'button primary small';
  }

  gravaValor(status: boolean, note: string) {
    this.escalas = [];
    this.notesTriade.length = 0;
    for (const item of this.checkedNotes) {
      if (item.checked) {
        this.notesTriade.push(item.value);        
      }
    }
    this.escalas.push({ Escalas: this.tonalService.GetScales(this.checkedNotes[0].note, [], [], this.notesTriade) });
  }

}
