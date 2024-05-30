import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCalculatorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'Привіт, Юрчик!';
  public text = 'Да, Юрчик,сьогодні скину';
  showMessage(test: string) {
    console.log(test);
  }
}
