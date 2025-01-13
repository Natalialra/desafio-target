import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faturamento-mensal',
  templateUrl: './faturamento-mensal.component.html',
  styleUrls: ['./faturamento-mensal.component.css']
})
export class FaturamentoMensalComponent implements OnInit {

  faturamentoEstados = [
    {estado: 'SP', valor: 67836.43},
    {estado: 'RJ', valor: 36678.66},
    {estado: 'MG', valor: 29229.88},
    {estado: 'ES', valor: 27165.48},
    {estado: 'Outros', valor: 19849.53}
  ];
  totalFaturamento: number = 0;

  ngOnInit(): void {
    this.totalFaturamento = this.faturamentoEstados.reduce(
      (acc, estado) => acc + estado.valor,
      0
    );

    this.faturamentoEstados = this.faturamentoEstados.map((estado) => ({
      ...estado,
      percentual: ((estado.valor / this.totalFaturamento) * 100).toFixed(2) + '%'
    }));
  }
}
