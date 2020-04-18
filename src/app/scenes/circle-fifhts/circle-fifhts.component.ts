import { Component, OnInit } from '@angular/core';

import { HarmonyServiceService } from '../../services/harmony-service.service';
import { INotes } from '../../services/interfaces/notes.interface';
import { CircleOfFifhts } from '../../services/db/circleOfFifhts.db';

@Component({
  selector: 'app-circle-fifhts',
  templateUrl: './circle-fifhts.component.html',
  styleUrls: ['./circle-fifhts.component.css']
})
export class CircleFifhtsComponent implements OnInit {

  notes: INotes[] = [];
  firstTonality: INotes[] = [];

  constructor(private tonalityService: HarmonyServiceService) {
    this.firstTonality.push(CircleOfFifhts.find(x => x.id === 1));
    this.tonalityService.pushTonalityInit(this.firstTonality);
  }

  ngOnInit() {
    this.notes = CircleOfFifhts;
  }

  onSelect(item: INotes): void {
    this.tonalityService.pushTonality(item);
  }

}
