import { Component, OnInit } from '@angular/core';
import { TonalService } from '../../services/tonal.service';
import { Circle } from '../../services/db/circle.db';
import { IInstruments } from 'src/app/services/interfaces/instruments.interface';
import { Instruments } from 'src/app/services/db/instruments.db';

@Component({
  selector: 'app-circle-fifhts',
  templateUrl: './circle-fifhts.component.html',
  styleUrls: ['./circle-fifhts.component.css']
})
export class CircleFifhtsComponent implements OnInit {
  notes: string[] = [];
  mode = '';
  majorModeCSS = 'button primary large';
  minorModeCSS = 'button large';
  instruments: IInstruments[] = [];


  constructor(private tonalService: TonalService) {
    this.tonalService.currentMode.subscribe(value => {
      this.mode = value[value.length - 1];
    });
  }

  ngOnInit() {
    this.notes = Circle;
    this.instruments = Instruments;
  }

  onSelect(item: string): void {
    this.tonalService.pushTonality(item);
  }

  onSelectInstrument(item: string): void {
    this.tonalService.pushInstrument(item);
  }

  onClick(mode: string): void {
    if (mode === 'menor') {
      this.tonalService.pushMode(mode);
      this.majorModeCSS = 'button large';
      this.minorModeCSS = 'button primary large';
    } else {
      this.tonalService.pushMode(mode);
      this.majorModeCSS = 'button primary large';
      this.minorModeCSS = 'button large';
    }
  }

  onClickMotivo() {
    this.tonalService.pushMode('sequence');
  }
}
