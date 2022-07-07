import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  value: number = 4;
  highValue: number = 6;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  order = 0;
  ascendent = true;

  orderString = ''
  ascendentString = ''


  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.getOrderString();
    this.getAscendentString();
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
      this.getFilteredBeers();
    });
    this.service.getBeers();
  }

  handleChange(event: any){
    // console.log(event);
    this.getFilteredBeers();
  }

  private getFilteredBeers(): void {
    this.filteredBeers = this.beers
    .filter(beer => {
      return beer.abv >= this.value && beer.abv <= this.highValue;
    })
    .sort((a: Beer, b: Beer) => {
      if (this.order === 0) {
        // order by name
        if (this.ascendent) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      } else if (this.order === 1) {
        // order by abv
        if (this.ascendent) {
          return a.abv - b.abv;
        } else {
          return b.abv - a.abv;
        }
      }
      else {
        // order by ibu
        if (this.ascendent) {
          return a.abv - b.abv;
        } else {
          return b.abv - a.abv;
        }
      }
  });
  }

  handleOrder(value: number) {
    console.log(value);
    this.order = value;
    this.getFilteredBeers();
    this.getOrderString();
  }

  handleAsc(value: boolean) {
    console.log(value);
    this.ascendent = value;
    this.getFilteredBeers();
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

}
