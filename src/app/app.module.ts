import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleFifhtsComponent } from './sections/circle-fifhts/circle-fifhts.component';
import { MajorModeComponent } from './sections/maior/major-mode/major-mode.component';
import { OptionalChordsComponent } from './sections/maior/optional-chords/optional-chords.component';
import { SecondaryDominantsComponent } from './sections/maior/secondary-dominants/secondary-dominants.component';
import { SubstituteDominantsComponent } from './sections/maior/substitute-dominants/substitute-dominants.component';
import { MinorModeComponent } from './sections/menor/minor-mode/minor-mode.component';
import { DrawChordsComponent } from './sections/draw-chords/draw-chords.component';
import { HarmonySequencyComponent } from './sections/harmony-sequency/harmony-sequency.component';
import { XmlmusicGenerateComponent } from './sections/xmlmusic-generate/xmlmusic-generate.component';
import { IdeaProgressionsComponent } from './sections/maior/progressions/idea-progressions/idea-progressions.component';
import { TabelaMaiorComponent } from './sections/maior/progressions/tabela-maior/tabela-maior.component';

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
    IdeaProgressionsComponent,
    TabelaMaiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
