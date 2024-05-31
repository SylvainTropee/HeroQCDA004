import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TitleComponent} from "./components/title/title.component";
import {AllHeroesComponent} from "./components/all-heroes/all-heroes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleComponent, AllHeroesComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heroes';
}
