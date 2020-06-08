import { Component } from '@angular/core';
import { TonalService } from './services/tonal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden: boolean = false;

  constructor(private tonalService: TonalService) {
    this.tonalService.pushModeInit([false]);
   }
  
  ngOnInit() {
    this.tonalService.currentMode.subscribe(value => {
      this.isHidden = value[value.length - 1];
    });
  }

}
