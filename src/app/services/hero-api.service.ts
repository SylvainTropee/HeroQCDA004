import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Biography} from "../models/biography";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  public heroes: Array<Hero> //Hero[]
  private readonly BASE_URL: string

  constructor(private http: HttpClient) {
    this.heroes = []
    this.BASE_URL = "https://akabab.github.io/superhero-api/api/"
  }

  public getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.BASE_URL + "all.json")
  }

  public getHeroById(id: number): Observable<Hero> | undefined {
    return this.http.get<Hero>(this.BASE_URL + `id/${id}.json`)
  }

  public getHeroBiographyById(id: number): Observable<Biography> | undefined {
    //return this.http.get<Hero>(this.BASE_URL + `id/${id}.json`)
    return this.http.get<{ biography: Biography }>(this.BASE_URL + `id/${id}.json`)
      .pipe(
        map(response => response.biography)
      )
  }


}
