import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FibonacciComponent} from "./fibonacci/fibonacci.component";
import {FaturamentoDiarioComponent} from "./faturamento-diario/faturamento-diario.component";

const routes: Routes = [
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'faturamentodiario', component: FaturamentoDiarioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
