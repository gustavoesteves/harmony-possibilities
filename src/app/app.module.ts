import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleFifhtsComponent } from './sections/config/circle-fifhts/circle-fifhts.component';
import { MajorModeComponent } from './sections/maior/major-mode/major-mode.component';
import { OptionalChordsComponent } from './sections/maior/optional-chords/optional-chords.component';
import { SecondaryDominantsComponent } from './sections/maior/secondary-dominants/secondary-dominants.component';
import { SubstituteDominantsComponent } from './sections/maior/substitute-dominants/substitute-dominants.component';
import { MinorModeComponent } from './sections/menor/minor-mode/minor-mode.component';
import { DrawChordsComponent } from './sections/tools/draw-chords/draw-chords.component';
import { HarmonySequencyComponent } from './sections/harmonia-aplicada/harmony-sequency/harmony-sequency.component';
import { XmlmusicGenerateComponent } from './sections/harmonia-aplicada/xmlmusic-generate/xmlmusic-generate.component';
import { HomeComponent } from './sections/home/home.component';
import { FraseMaiorComponent } from './sections/tools/draw-chords/frase-maior/frase-maior.component';
import { HarmonicoComponent } from './sections/menor/harmonico/harmonico.component';
import { MelodicoComponent } from './sections/menor/melodico/melodico.component';
import { DoricoComponent } from './sections/menor/dorico/dorico.component';
import { FrigioComponent } from './sections/menor/frigio/frigio.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleFifhtsComponent,
    MajorModeComponent,
    OptionalChordsComponent,
    SecondaryDominantsComponent,
    SubstituteDominantsComponent,
    MinorModeComponent,
    DrawChordsComponent,
    HarmonySequencyComponent,
    XmlmusicGenerateComponent,
    HomeComponent,
    FraseMaiorComponent,
    HarmonicoComponent,
    MelodicoComponent,
    DoricoComponent,
    FrigioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
