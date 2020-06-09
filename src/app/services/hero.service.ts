import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = 'https://localhost:8080/api/heroes'

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl)
  }
}
