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
  modoMaior = 'opener';
  modoMenor = 'opener';
  modoModal = 'opener';
  harmonia = 'opener';
  config = 'opener';
  menu = '';

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
    this.tonalService.pushMode(menu);
  }

  openMenu(menu: string) {
    if (menu === 'maior') {
      if (this.modoMaior === "opener") { this.modoMaior = "opener active" }
      else { this.modoMaior = "opener" }
    }
    if (menu === 'menor') {
      if (this.modoMenor === "opener") { this.modoMenor = "opener active" }
      else { this.modoMenor = "opener" }
    }
    if (menu === 'modal') {
      if (this.modoModal === "opener") { this.modoModal = "opener active" }
      else { this.modoModal = "opener" }
    }
    if (menu === 'harmonia') {
      if (this.harmonia === "opener") { this.harmonia = "opener active" }
      else { this.harmonia = "opener" }
    }
    if (menu === 'config') {
      if (this.config === "opener") { this.config = "opener active" }
      else { this.config = "opener" }
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
