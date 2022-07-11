import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  beers$: BehaviorSubject<Beer[]> = this.service.beers$;

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    // this.service.beers$.subscribe(beers => {
    //   this.beers = beers;
    // });
    this.beers$ = this.service.beers$;
    this.service.getBeers();
  }


  handleSelectionChange(event: any){
    this.selection = event;
  }

}
