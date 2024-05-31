import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  public heroes: Array<Hero> //Hero[]

  constructor() {
    this.heroes = []
    this.heroes.push({
      id: 1,
      name: "Hulk",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"
    })
    this.heroes.push({
      id: 2,
      name: "Wonder Woman",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg"
    })
    this.heroes.push({
      id: 3,
      name: "Batman",
      image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg"
    })
  }

  public getAllHeroes(): Hero[] {
    return this.heroes
  }

  public getHeroById(id: number) : Hero | undefined {
    return this.heroes.find((h: Hero) => h.id == id)
  }


}
