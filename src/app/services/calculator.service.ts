import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum State {
  INIT,
  FIRSTFIGURE,
  SECONDFIGURE,
  RESULT
}

@Injectable()
export class CalculatorService {


  private display = '';

  public display$ = new BehaviorSubject<string>(this.display);

  private currentState = State.INIT;
  private firstFigure = 0;
  private secondFigure = 0;
  private result = 0;
  private operator = '';

  constructor() { }

  handleNumber(value: number): void {
    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = value;
        this.currentState = State.FIRSTFIGURE;
        this.display = value.toString();
        this.display$.next(this.display)
        break;
      case State.FIRSTFIGURE:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display = this.display + value.toString();
        this.display$.next(this.display)
        break;
      case State.SECONDFIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display = this.display + value.toString();
        this.display$.next(this.display)
        break;
      case State.RESULT:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FIRSTFIGURE;
        this.display = value.toString();
        this.display$.next(this.display)
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
          this.display$.next(this.display)
        }
        break;
      case State.SECONDFIGURE:
        if(value === '=' && this.secondFigure !== 0) {
          this.result = this.resolve();
          this.currentState = State.RESULT;
          this.display = this.display + value + this.result.toString();
          this.display$.next(this.display)
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
          this.display$.next(this.display)
        }
        break;
      default:
        break;
    }

  }

  private resolve(): number {
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
