import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [
    new Hero('Batman', 'Dark knight'),
    new Hero('Superman', 'Superhero'),
    new Hero('Spiderman', 'Spidy'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(hero: Hero){
    this.heroes.push(hero);
  }

}
