import {Component} from '@angular/core';
import {JsonPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: Hero[] //Array<Hero>
  //private heroApi: HeroApiService

  constructor(private heroApi: HeroApiService) {
    this.heroes = []
  }

  addHeroes() {
    this.heroes = this.heroApi.getAllHeroes()
  }
}
