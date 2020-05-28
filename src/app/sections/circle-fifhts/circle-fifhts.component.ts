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

  constructor(private tonalService: TonalService) { }

  ngOnInit() {
    this.tonalService.pushTonalityInit(["C"]);
    this.notes = Circle;
  }

  onSelect(item: string): void {
    this.tonalService.pushTonality(item);
  }
}
