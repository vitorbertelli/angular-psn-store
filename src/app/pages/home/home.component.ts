import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { GameService } from '../../shared/game.service';
import { Game } from '../../shared/game';
import { catchError, EMPTY, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  games$!: Observable<Game[]>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.games$ = this.gameService.get()
      .pipe(
        catchError(error => {
          console.log(error);
          return EMPTY;
        })
      );
    // console.log(this.games$);
  }

}
