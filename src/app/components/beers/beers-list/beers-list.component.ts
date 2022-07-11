import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit, OnChanges {

  @Input() beers: Beer[] = [];
  @Input() selection: any = {
    order: 0,
    ascendent: true,
    value: 4,
    highValue: 6
  }

  filteredBeers: Beer[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selection']) {
      this.getFilteredBeers();
    } else if (changes['beers']) {
      this.getFilteredBeers();
    }

  }

  ngOnInit(): void {

  }

  getFilteredBeers(): void {

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


}
