import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    this.service.heroes$.subscribe(heroes => {
      this.heroes = heroes;
    })
  }

  addHero(hero: Hero){
    this.service.addHero(hero);
  }

  removeHero(index: number){
    this.service.removeHero(index);
  }

  getHeroes(){
    return [...this.heroes];
  }



}
