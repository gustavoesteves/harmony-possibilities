import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/services/interfaces/notes.interface';
import { EAccident } from 'src/app/services/interfaces/accident.enum';
import { HarmonyServiceService } from 'src/app/services/harmony-service.service';

@Component({
  selector: 'app-secondary-dominants',
  templateUrl: './secondary-dominants.component.html',
  styleUrls: ['./secondary-dominants.component.css']
})
export class SecondaryDominantsComponent implements OnInit {
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

  constructor(private tonalityService: HarmonyServiceService) { }

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
