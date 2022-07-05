import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss']
})
export class HeroesFormComponent implements OnInit {

  @Output() onNewHero = new EventEmitter<Hero>();
  newHero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
  }

  addHero(){
    this.onNewHero.emit(this.newHero);
    this.newHero = new Hero();
  }

}
