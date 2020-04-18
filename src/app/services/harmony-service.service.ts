import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { INotes } from './interfaces/notes.interface';
import { EAccident } from './interfaces/accident.enum';
import { Flat } from './db/flat.db';
import { Sharp } from './db/sharp.db';

@Injectable({
  providedIn: 'root'
})
export class HarmonyServiceService {

  //guarda o tom escolhido no combo
  private tonality = new BehaviorSubject<INotes[]>([]);
  currentTonality = this.tonality.asObservable();

  //guarda a serie harmonica ja organizada relativa ao tom escolhido
  private harmonicSeries = new BehaviorSubject<INotes[]>([]);
  currentHarmonicSeries = this.harmonicSeries.asObservable();

  constructor() { }

  pushTonalityInit(tonality: INotes[]) {
    this.tonality.next(tonality);
  }

  pushTonality(tonality: INotes) {
    //gravando nova tonalidade
    const newTonality = this.tonality.value;
    newTonality.push(tonality);
    this.tonality.next(newTonality);
    //alterando a serie harmonica
    this.pushHarmonicSeries();
  }

  getTonality(): INotes {
    return this.tonality.value[this.tonality.value.length - 1];
  }

  getHarmonicSeries(): INotes {
    return this.harmonicSeries.value[this.harmonicSeries.value.length - 1];
  }

  pushHarmonicSeries() {
    let newHarmonicSeries: INotes[] = [];
    let currentTonality = this.getTonality();
    if (currentTonality.accident === EAccident.flat) {
      newHarmonicSeries = this.reorderHarmonicSeries(Flat);
    } else {
      newHarmonicSeries = this.reorderHarmonicSeries(Sharp);
    }
    this.harmonicSeries.next(newHarmonicSeries);
  }

  reorderHarmonicSeries(tonality: INotes[]): INotes[] {
    let result: INotes[] = [];
    tonality.map((value, index) => {
      let currentTonality = this.getTonality();
      if (currentTonality.id > (index + 1)) {
        result.push({
          id: (index + (12 - currentTonality.id) + 2),
          name: value.name,
          accident: value.accident
        });
      } else {
        result.push({
          id: ((index - currentTonality.id) + 2),
          name: value.name,
          accident: value.accident
        });
      }
      return result;
    });
    return result;
  }
}
