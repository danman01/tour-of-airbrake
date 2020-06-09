import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public hero: Hero;

  constructor(private heroService: HeroService) {
    // this.heroService = heroService;
  }

  ngOnInit() {
    this.hero = {
      name: 'Windhammer',
      id: 123
    }
  }

  public getHeroes(): Hero[] {
    let heroes = []
    this.heroService.getHeroes().subscribe((heroesResponse): void => {
      heroes = heroesResponse
    })
    return heroes
  }

  someError() {
    const some = {}
    return some['meth'].undefined;
  }

}
