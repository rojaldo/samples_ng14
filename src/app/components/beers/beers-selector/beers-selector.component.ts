import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beers-selector',
  templateUrl: './beers-selector.component.html',
  styleUrls: ['./beers-selector.component.scss']
})
export class BeersSelectorComponent implements OnInit {

  @Output() onSelectionsChange = new EventEmitter<any>();

  value: number = 4;
  highValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  orderString = ''
  ascendentString = ''

  order = 0;
  ascendent = true;

  constructor() { }

  ngOnInit(): void {
    this.getOrderString();
    this.getAscendentString();
  }

  getOrderString(){
    if (this.order === 0) {
      this.orderString = 'Name';
    } else if (this.order === 1) {
      this.orderString = 'ABV';
    } else {
      this.orderString = 'NONE';
    }
  }

  getAscendentString() {
    this.ascendent ? this.ascendentString = 'Ascendent' : this.ascendentString = 'Descendent';
  }

  handleOrder(value: number) {
    this.order = value;
    this.sendSelection()
    this.getOrderString();
  }

  handleAsc(value: boolean) {
    this.ascendent = value;
    this.sendSelection()
    this.getAscendentString();
  }

  handleChange(event: any){
    this.sendSelection()
  }

  sendSelection() {
    this.onSelectionsChange.emit({
      order: this.order,
      ascendent: this.ascendent,
      value: this.value,
      highValue: this.highValue
    });
  }

}
