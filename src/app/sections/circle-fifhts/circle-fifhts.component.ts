import { Component, OnInit } from '@angular/core';
import { TonalService } from "../../services/tonal.service";
import { Circle } from "../../services/db/circle.db";

@Component({
  selector: 'app-circle-fifhts',
  templateUrl: './circle-fifhts.component.html',
  styleUrls: ['./circle-fifhts.component.css']
})
export class CircleFifhtsComponent implements OnInit {
  notes: string[] = [];
  mode: boolean = false;
  majorModeCSS: string = "button primary large";
  minorModeCSS: string = "button large";

  constructor(private tonalService: TonalService) {
    this.tonalService.currentMode.subscribe(value => {
      this.mode = value[value.length - 1];
    });
  }

  ngOnInit() {
    this.tonalService.pushTonalityInit(["C"]);
    this.notes = Circle;
  }

  onSelect(item: string): void {
    this.tonalService.pushTonality(item);
  }

  onClick(mode: boolean): void {
    if (mode) {
      this.tonalService.pushMode(mode);
      this.majorModeCSS = "button large";
      this.minorModeCSS = "button primary large";
    } else {
      this.tonalService.pushMode(mode);
      this.majorModeCSS = "button primary large";
      this.minorModeCSS = "button large";
    }
  }
}
