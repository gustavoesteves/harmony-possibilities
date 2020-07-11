import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TonalService } from './services/tonal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu = '';

  constructor(private tonalService: TonalService) {
    this.tonalService.pushModeInit(['sequence']);
    this.tonalService.pushMotivoInit();
  }

  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.menu = value[value.length - 1];
    });
  }

  onClickDraw() {
  }
}
