import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from './services/tonal.service';
import { Instruments } from './services/db/instruments.db';
import { Chorinho } from './services/frases/chorinho.frase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebar = '';
  harmonia = 'opener';
  config = 'opener';
  contemporaneo = 'opener';
  classico = 'opener';
  menu = '';
  menuSelecionado: IConfigMenu[] = [
    { Name: 'maior', Status: '' },
    { Name: 'optional-chods', Status: '' },
    { Name: 'secondary-dominants', Status: '' },
    { Name: 'progressao-segunda-quinta', Status: '' },
    { Name: 'substitute-dominants', Status: '' },
    { Name: 'natural', Status: '' },
    { Name: 'hamonico', Status: '' },
    { Name: 'melodico', Status: '' },
    { Name: 'dorico', Status: '' },
    { Name: 'frigio', Status: '' },
  ];

  constructor(private tonalService: TonalService, private chorinho: Chorinho) {
    this.tonalService.pushModeInit(['sequence']);
    this.tonalService.pushTonalityInit(['C']);
    this.tonalService.pushInstrumentIni([Instruments[6]]);
    this.chorinho.BuildChordProgressionInit();
    this.tonalService.pushMode('home');
  }

  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.menu = value[value.length - 1];
    });
  }

  onClickDraw() { }

  changeMenu(menu: string) {
    for (const menu of this.menuSelecionado) {
      menu.Status = '';
    }
    this.menuSelecionado.find(_ => _.Name === menu).Status = 'ActiveMenu';
    this.tonalService.pushMode(menu);
  }

  openMenu(menu: string) {
    if (menu === 'contemporaneo') {
      this.contemporaneo = this.contemporaneo === 'opener' ? 'opener active' : 'opener';
    }
    if (menu === 'harmonia') {
      this.harmonia = this.harmonia === "opener" ? 'opener active' : 'opener';
    }
    if (menu === 'config') {
      this.config = this.config === "opener" ? 'opener active' : 'opener';
    }
  }

  changeSideBar() {
    if (this.sidebar === "") { this.sidebar = "inactive" }
    else { this.sidebar = "" }
  }

  onSelect(item: string): void {
    this.tonalService.pushTonality(item);
  }

}

interface IConfigMenu {
  Name: string;
  Status: string;
}

