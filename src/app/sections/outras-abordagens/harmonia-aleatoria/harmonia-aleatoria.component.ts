import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harmonia-aleatoria',
  templateUrl: './harmonia-aleatoria.component.html',
  styleUrls: ['./harmonia-aleatoria.component.css']
})
export class HarmoniaAleatoriaComponent implements OnInit {
  header = [{ Compasso: 'Compasso', Acordes: 'Acordes' }];
  body = [{ Compasso: 0, Acorde: '' }];
  compassos = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
  }

  changeCompasso(value: number) {
    this.compassos = value;
  }

}
