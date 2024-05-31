import {Component} from '@angular/core';
import {JsonPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    NgOptimizedImage,
    RouterLink,
    HttpClientModule
  ],
  providers: [HeroApiService],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes: Hero[] //Array<Hero>
  //private heroApi: HeroApiService

  ngOnInit() {
    this.addHeroes()
  }

  constructor(private heroApi: HeroApiService) {
    this.heroes = []
  }

  addHeroes() {
    this.heroApi.getAllHeroes().subscribe(
      (aHero: Hero[]) => this.heroes = aHero)
  }
}
