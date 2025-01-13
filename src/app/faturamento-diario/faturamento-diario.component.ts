import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faturamento-diario',
  templateUrl: './faturamento-diario.component.html',
  styleUrls: ['./faturamento-diario.component.css']
})
export class FaturamentoDiarioComponent implements OnInit {

  menorValor: number = 0;
  maiorValor: number = 0;
  diasAcimaMedia: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/faturamento-diario.json').subscribe(
      (dados) => {
        const valoresValidos = dados
          .filter(item => item.valor > 0)
          .map(item => item.valor);

        if (valoresValidos.length > 0) {
          this.menorValor = Math.min(...valoresValidos);
          this.maiorValor = Math.max(...valoresValidos);
          const mediaMensal = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;

          this.diasAcimaMedia = dados.filter(item => item.valor > mediaMensal).length;
        }
      },
      (error) => {
        console.error('Erro ao carregar o arquivo JSON:', error);
      }
    );
  }
}
