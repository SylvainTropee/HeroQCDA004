import {Component} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

  public title: string

  constructor() {
    this.title = "Super Heroes !"
  }

}
