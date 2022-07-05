import { Component } from '@angular/core';


enum State {
  INIT,
  FIRSTFIGURE,
  SECONDFIGURE,
  RESULT
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esto es una prueba';
  display = ''

  currentState = State.INIT;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  handleClick(value: number | string): void {
    if (typeof value === 'number') {
      this.handleNumber(value)
    }
    else if (typeof value === 'string') {
      this.handleSymbol(value)
    }
  }

  handleNumber(value: number): void {
    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = value;
        this.currentState = State.FIRSTFIGURE;
        this.display = value.toString();
        break;
      case State.FIRSTFIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display = this.display + value.toString();
        break;
      case State.SECONDFIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display = this.display + value.toString();
        break;
      case State.RESULT:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FIRSTFIGURE;
        this.display = value.toString();
        break;
      default:
        break;
    }
  }

  handleSymbol(value: string): void {
    switch (this.currentState) {
      case State.INIT:
        break;
      case State.FIRSTFIGURE:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.currentState = State.SECONDFIGURE;
          this.display = this.display + value;
        }
        break;
      case State.SECONDFIGURE:
        if(value === '=' && this.secondFigure !== 0) {
          this.result = this.resolve();
          this.currentState = State.RESULT;
          this.display = this.display + value + this.result.toString();
        }
        break;
      case State.RESULT:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.result = 0;
          this.operator = value;
          this.currentState = State.SECONDFIGURE;
          this.display = this.firstFigure.toString() + this.operator;
        }
        break;
      default:
        break;
    }

  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        return 0;
    }
  }
}
