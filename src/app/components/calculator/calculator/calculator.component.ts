import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = ''

  constructor(
    private service: CalculatorService) { }

  ngOnInit(): void {
    this.service.display$.subscribe(display => {
      this.display = display
    })
  }

  handleClick(value: number | string): void {
    if (typeof value === 'number') {
      this.service.handleNumber(value)
    }
    else if (typeof value === 'string') {
      this.service.handleSymbol(value)
    }
  }

}
