import { Component, input } from '@angular/core';

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
  games: Game[] = [];
  season!: string;
  wins!: number;
  losses!: number;
  teamId = input.required<string>();
  dates = input.required<Date[]>();

  ngOnInit() {
    // Feed is presented date-based
    // We need to translate to game-based
    this.dates()
      // Check to see if date has a game
      .filter((date: Date) => date.totalGames >= 1)
      .map((date: Date) =>
        date.games
          // Filter to allow only regular-season
          // and completed games
          .filter(
            (game: Game) =>
              game.gameType === 'R' && game.status.statusCode === 'F'
          )
          .map((game: Game) => {
            // Add all games to tracking array
            this.games.push(game);
          })
      );
    if (this.games.length > 0) {
      this.season = this.games[0].seasonDisplay;
      let homeTeam = this.games[this.games.length - 1].teams.home;
      let awayTeam = this.games[this.games.length - 1].teams.away;
      // Extract Rays wins/losses from game by
      // companing home/away team IDs to Rays team ID
      this.wins =
        homeTeam.team.id == this.teamId()
          ? homeTeam.leagueRecord.wins
          : awayTeam.leagueRecord.wins;
      this.losses =
        homeTeam.team.id == this.teamId()
          ? homeTeam.leagueRecord.losses
          : awayTeam.leagueRecord.losses;
    }
  }
}
