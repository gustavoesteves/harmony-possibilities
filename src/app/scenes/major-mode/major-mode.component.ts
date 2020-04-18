import { Component, OnInit } from '@angular/core';

import { HarmonyServiceService } from '../../services/harmony-service.service';
import { INotes } from '../../services/interfaces/notes.interface';
import { EAccident } from '../../services/interfaces/accident.enum';

@Component({
  selector: 'app-major-mode',
  templateUrl: './major-mode.component.html',
  styleUrls: ['./major-mode.component.css']
})
export class MajorModeComponent implements OnInit {
  I: INotes = { id: 0, name: "", accident: EAccident.flat };
  II: INotes = { id: 0, name: "", accident: EAccident.flat };
  III: INotes = { id: 0, name: "", accident: EAccident.flat };
  IV: INotes = { id: 0, name: "", accident: EAccident.flat };
  V: INotes = { id: 0, name: "", accident: EAccident.flat };
  VI: INotes = { id: 0, name: "", accident: EAccident.flat };
  VII: INotes = { id: 0, name: "", accident: EAccident.flat };
  VIII: INotes = { id: 0, name: "", accident: EAccident.flat };
  IX: INotes = { id: 0, name: "", accident: EAccident.flat };
  X: INotes = { id: 0, name: "", accident: EAccident.flat };
  XI: INotes = { id: 0, name: "", accident: EAccident.flat };
  XII: INotes = { id: 0, name: "", accident: EAccident.flat };

  constructor(private tonalityService: HarmonyServiceService) {
/*     this.I = { id: 0, name: "", accident: EAccident.flat };
    this.II = { id: 0, name: "", accident: EAccident.flat };
    this.III = { id: 0, name: "", accident: EAccident.flat };
    this.IV = { id: 0, name: "", accident: EAccident.flat };
    this.V = { id: 0, name: "", accident: EAccident.flat };
    this.VI = { id: 0, name: "", accident: EAccident.flat };
    this.VII = { id: 0, name: "", accident: EAccident.flat };
    this.VIII = { id: 0, name: "", accident: EAccident.flat };
    this.IX = { id: 0, name: "", accident: EAccident.flat };
    this.X = { id: 0, name: "", accident: EAccident.flat };
    this.XI = { id: 0, name: "", accident: EAccident.flat };
    this.XII = { id: 0, name: "", accident: EAccident.flat }; */
  }

  ngOnInit() {
    this.tonalityService.currentHarmonicSeries.subscribe(value => {
      this.I = value.find(result => result.id === 1);
      this.II = value.find(result => result.id === 2);
      this.III = value.find(result => result.id === 3);
      this.IV = value.find(result => result.id === 4);
      this.V = value.find(result => result.id === 5);
      this.VI = value.find(result => result.id === 6);
      this.VII = value.find(result => result.id === 7);
      this.VIII = value.find(result => result.id === 8);
      this.IX = value.find(result => result.id === 9);
      this.X = value.find(result => result.id === 10);
      this.XI = value.find(result => result.id === 11);
      this.XII = value.find(result => result.id === 12);
    });
  }

}
