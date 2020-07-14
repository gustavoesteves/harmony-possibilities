import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from './services/tonal.service';
import { Instruments } from './services/db/instruments.db';
import { IPhrases } from './services/interfaces/phrases.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu = '';

  constructor(private tonalService: TonalService) {
    this.tonalService.pushModeInit(['sequence']);
    this.tonalService.pushTonalityInit(['C']);
    this.tonalService.pushInstrumentIni([Instruments[0]]);
    this.tonalService.BuildChordProgressionInit();
  }

  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.menu = value[value.length - 1];
    });
  }

  onClickDraw() {
  }
}
