import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import {FormsModule} from "@angular/forms";
import { FaturamentoDiarioComponent } from './faturamento-diario/faturamento-diario.component';
import { HttpClientModule } from '@angular/common/http';
import { FaturamentoMensalComponent } from './faturamento-mensal/faturamento-mensal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FibonacciComponent,
    FaturamentoDiarioComponent,
    FaturamentoMensalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
