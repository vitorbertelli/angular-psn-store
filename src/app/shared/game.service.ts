import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './game';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  get(): Observable<Game[]> {
    return this.http.get<Game[]>("/data/games.json")
      .pipe(
        tap(dados => console.log(dados))
      );
  }

}
