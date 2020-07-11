import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleFifhtsComponent } from './sections/circle-fifhts/circle-fifhts.component';
import { MajorModeComponent } from './sections/major-mode/major-mode.component';
import { OptionalChordsComponent } from './sections/optional-chords/optional-chords.component';
import { SecondaryDominantsComponent } from './sections/secondary-dominants/secondary-dominants.component';
import { SubstituteDominantsComponent } from './sections/substitute-dominants/substitute-dominants.component';
import { MinorModeComponent } from './sections/minor-mode/minor-mode.component';
import { DrawChordsComponent } from './sections/draw-chords/draw-chords.component';
import { HarmonySequencyComponent } from './sections/harmony-sequency/harmony-sequency.component';
import { XmlmusicGenerateComponent } from './sections/xmlmusic-generate/xmlmusic-generate.component';

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
    XmlmusicGenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
