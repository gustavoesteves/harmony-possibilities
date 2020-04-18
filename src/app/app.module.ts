import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MajorModeComponent } from './scenes/major-mode/major-mode.component';
import { OptionalChordsComponent } from './scenes/optional-chords/optional-chords.component';
import { CircleFifhtsComponent } from './scenes/circle-fifhts/circle-fifhts.component';
import { SecondaryDominantsComponent } from './scenes/secondary-dominants/secondary-dominants.component';
import { ChartComponent } from './chords/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MajorModeComponent,
    OptionalChordsComponent,
    CircleFifhtsComponent,
    SecondaryDominantsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
