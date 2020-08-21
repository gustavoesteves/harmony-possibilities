import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from './services/tonal.service';
import { Instruments } from './services/db/instruments.db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidebar = 'inactive';
  modoMaior = 'opener';
  modoMenor = 'opener';
  modoModal = 'opener';
  harmonia = 'opener';
  config = 'opener';
  menu = '';

  constructor(private tonalService: TonalService) {
    this.tonalService.pushModeInit(['sequence']);
    this.tonalService.pushTonalityInit(['C']);
    this.tonalService.pushInstrumentIni([Instruments[0]]);
    this.tonalService.BuildChordProgressionInit();
    this.tonalService.pushMode('maior');
  }

  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.menu = value[value.length - 1];
    });
  }

  onClickDraw() {}

  changeSideBar() {
    if (this.sidebar === "") { this.sidebar = "inactive" }
    else { this.sidebar = "" }
  }

  modoMaiorChange() {
    if (this.modoMaior === "opener") { this.modoMaior = "opener active" }
    else { this.modoMaior = "opener" }
  }

  modoMenorChange() {
    if (this.modoMenor === "opener") { this.modoMenor = "opener active" }
    else { this.modoMenor = "opener" }
  }

  modoModalChange() {
    if (this.modoModal === "opener") { this.modoModal = "opener active" }
    else { this.modoModal = "opener" }
  }

  configHarmonia() {
    if (this.harmonia === "opener") { this.harmonia = "opener active" }
    else { this.harmonia = "opener" }
  }

  configChange() {
    if (this.config === "opener") { this.config = "opener active" }
    else { this.config = "opener" }
  }
}
