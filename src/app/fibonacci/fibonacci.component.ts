import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {

  numberInput: number | null = null;
  resultMessage: string = '';

  checkFibonacci() {
    if (this.numberInput === null || this.numberInput < 0) {
      this.resultMessage = 'Por favor, insira um número válido.';
      return;
    }

    let a = 0;
    let b = 1;

    while (a < this.numberInput) {
      const temp = a + b;
      a = b;
      b = temp;
    }

    if (a === this.numberInput) {
      this.resultMessage = `O número ${this.numberInput} pertence à sequência de Fibonacci.`;
    } else {
      this.resultMessage = `O número ${this.numberInput} NÃO pertence à sequência de Fibonacci.`;
    }
  }
}


