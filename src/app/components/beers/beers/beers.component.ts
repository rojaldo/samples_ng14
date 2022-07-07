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

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.beers$.subscribe(beers => {
      this.beers = beers;
    });
    this.service.getBeers();
  }


  handleSelectionChange(event: any){
    this.selection = event;
  }

}
