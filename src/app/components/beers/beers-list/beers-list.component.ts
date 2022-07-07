import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {


  @Input() beers: Beer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
