import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;

  public operation: string = '+';

  public operations: string[] = ['+', '-', '*', '/'];

  public result?: number;

  public calc() {
    switch (this.operation) {
      case '+':
        this.result = +this.first + +this.second;
        break;
      case '-':
        this.result = +this.first - +this.second;
        break;
      case '*':
        this.result = +this.first * +this.second;
        break;
      case '/':
        if (this.second != 0) {
          this.result = +this.first / +this.second;
        } else {
          this.result = 0;
        }
        break;
      default:
        this.result = 0;
        break;
    }
  }
}
