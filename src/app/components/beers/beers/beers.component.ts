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

  counter = 0;

  beers: Beer[] = [];
  filteredBeers: Beer[] = [];

  constructor(private service: BeersService) { }

  ngOnInit(): void {
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

  getFilteredBeers(): void {
    console.log('getFilteredBeers: ' + this.counter);
    this.counter++;
    this.filteredBeers = this.beers.filter(beer => {
      return beer.abv >= this.value && beer.abv <= this.highValue;
    });
  }

}
