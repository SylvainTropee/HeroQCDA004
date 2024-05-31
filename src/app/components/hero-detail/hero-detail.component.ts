import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {Hero} from "../../models/hero";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public hero: Hero | undefined

  constructor(/*@Inject(ActivatedRoute)*/
              private route: ActivatedRoute,
              private heroApi: HeroApiService
  ) {
    //this.id = this.route.snapshot.paramMap.get('id')
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.hero = this.heroApi.getHeroById(id)
    }
  }

}
