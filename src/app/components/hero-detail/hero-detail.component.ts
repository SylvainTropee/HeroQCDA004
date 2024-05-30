import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id : number | null

  constructor(/*@Inject(ActivatedRoute)*/ private route : ActivatedRoute) {
    //this.id = this.route.snapshot.paramMap.get('id')
    this.id = this.route.snapshot.params['id'];
  }

}
