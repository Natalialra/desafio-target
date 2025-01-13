import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FibonacciComponent} from "./fibonacci/fibonacci.component";
import {FaturamentoDiarioComponent} from "./faturamento-diario/faturamento-diario.component";
import {FaturamentoMensalComponent} from "./faturamento-mensal/faturamento-mensal.component";

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'faturamentodiario', component: FaturamentoDiarioComponent },
  { path: 'faturamentomensal', component: FaturamentoMensalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
