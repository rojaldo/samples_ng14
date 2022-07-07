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

  selection: any = {
    order: 0,
    ascendent: true,
    value: 4,
    highValue: 6
  }

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

  private getFilteredBeers(): void {
    this.filteredBeers = this.beers
    .filter(beer => {
      return beer.abv >= this.selection.value && beer.abv <= this.selection.highValue;
    })
    .sort((a: Beer, b: Beer) => {
      if (this.selection.order === 0) {
        // order by name
        if (this.selection.ascendent) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      } else if (this.selection.order === 1) {
        // order by abv
        if (this.selection.ascendent) {
          return a.abv - b.abv;
        } else {
          return b.abv - a.abv;
        }
      }
      else {
        // order by ibu
        if (this.selection.ascendent) {
          return a.abv - b.abv;
        } else {
          return b.abv - a.abv;
        }
      }
  });
  }

  handleSelectionChange(event: any){
    this.selection = event;
    this.getFilteredBeers();
  }

}
