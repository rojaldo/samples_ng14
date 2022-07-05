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
  newHero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
  }

  addHero(){
    this.heroes.push(new Hero(this.newHero.name, this.newHero.description));
    this.newHero = new Hero();
  }

}
