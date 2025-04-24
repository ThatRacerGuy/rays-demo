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
  season?: string;
  wins?: string;
  losses?: string;
  teamId = input.required<string>();
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
    if (this.games.length > 0) {
      console.log(this.games[0]);
      this.season = this.games[0].seasonDisplay;
      let homeTeam = this.games[this.games.length - 1].teams.home;
      let awayTeam = this.games[this.games.length - 1].teams.away;
      this.wins = homeTeam.team.id == this.teamId ? homeTeam.leagueRecord.wins : awayTeam.leagueRecord.wins;
      this.losses = homeTeam.team.id == this.teamId ? homeTeam.leagueRecord.losses : awayTeam.leagueRecord.losses;
    }
  }
}
