import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { RodapeModule } from './components/rodape/rodape.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RodapeModule,
    CabecalhoModule,
    AutenticacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
