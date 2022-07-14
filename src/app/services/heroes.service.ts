import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable()
export class HeroesService {

  private _heroes: Hero[] = [
    new Hero('Batman', 'Dark knight'),
    new Hero('Superman', 'Superhero'),
    new Hero('Spiderman', 'Spidy'),
  ];

  heroes$ = new BehaviorSubject<Hero[]>(this.heroes);

  get heroes(): Hero[] {
    return [...this._heroes];
  }

  constructor() { }

  addHero(hero: Hero){
    this._heroes.push(hero);
    this.heroes$.next(this.heroes);
  }

  removeHero(index: number){
    this._heroes.splice(index, 1);
    this.heroes$.next(this.heroes);
  }

}
