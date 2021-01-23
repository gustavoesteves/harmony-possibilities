import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modo Maior
import { MajorModeComponent } from './sections/maior/major-mode/major-mode.component';
import { OptionalChordsComponent } from './sections/maior/optional-chords/optional-chords.component';
import { SecondaryDominantsComponent } from './sections/maior/secondary-dominants/secondary-dominants.component';
import { SubstituteDominantsComponent } from './sections/maior/substitute-dominants/substitute-dominants.component';
import { FraseMaiorComponent } from './sections/tools/frase-maior/frase-maior.component';
import { ProgressaoSegundaQuintaComponent } from './sections/maior/progressao-segunda-quinta/progressao-segunda-quinta.component';
import { DescricaoComponent } from './sections/maior/descricao/descricao.component';

// Modo Menor
import { MinorModeComponent } from './sections/menor/minor-mode/minor-mode.component';
import { HarmonicoComponent } from './sections/menor/harmonico/harmonico.component';
import { MelodicoComponent } from './sections/menor/melodico/melodico.component';
import { DoricoComponent } from './sections/menor/dorico/dorico.component';
import { FrigioComponent } from './sections/menor/frigio/frigio.component';
import { DescricaoMenorComponent } from './sections/menor/descricao/descricao.component';

// Modo Tools
import { DrawChordsComponent } from './sections/tools/draw-chords/draw-chords.component';
import { XmlmusicGenerateComponent } from './sections/tools/xmlmusic-generate/xmlmusic-generate.component';
import { ConstrutorAcordesComponent } from './sections/tools/construtor-acordes/construtor-acordes.component';
import { ConstrutorEscalasComponent } from './sections/tools/construtor-escalas/construtor-escalas.component';
import { FraseMenorComponent } from './sections/tools/frase-menor/frase-menor.component';

import { HarmonySequencyComponent } from './sections/harmonia-aplicada/harmony-sequency/harmony-sequency.component';
import { HomeComponent } from './sections/home/home.component';
import { SambaComponent } from './sections/harmonia-aplicada/samba/samba.component';
import { BaiaoComponent } from './sections/harmonia-aplicada/baiao/baiao.component';
import { FrevoComponent } from './sections/harmonia-aplicada/frevo/frevo.component';
import { ValsaMineiraComponent } from './sections/harmonia-aplicada/valsa-mineira/valsa-mineira.component';
import { EscalasAcordeComponent } from './sections/tools/escalas-acorde/escalas-acorde.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FrigioComponent,
    FraseMenorComponent,
    ConstrutorAcordesComponent,
    ConstrutorEscalasComponent,
    SambaComponent,
    BaiaoComponent,
    FrevoComponent,
    ValsaMineiraComponent,
    ProgressaoSegundaQuintaComponent,
    DescricaoComponent,
    DescricaoMenorComponent,
    EscalasAcordeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
