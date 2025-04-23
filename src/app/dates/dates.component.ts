import { Component, input, output } from '@angular/core';

import { Date, Game } from '../app.model';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.css',
})
export class DatesComponent {
  games: any[] = [];
  dates = input.required<Date[]>();

  ngOnInit() {
    this.dates()
      .filter((date: any) => date.totalGames >= 1)
      .map((date: any) => (
        date.games
          .filter((game: any) => game.gameType === 'R' && game.status.statusCode === 'F')
          .map((game: any) => {
            this.games.push(game);
          })
      ))
  }
}
