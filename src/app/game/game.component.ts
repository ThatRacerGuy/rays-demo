import { Component, input } from '@angular/core';

import { Game, Team, Pitcher } from '../app.model';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  game = input.required<Game>();
  homeTeam!: Team;
  awayTeam!: Team;
  homePitcher!: Pitcher;
  awayPitcher!: Pitcher;

  ngOnInit() {
    this.homeTeam = this.game().teams.home;
    this.awayTeam = this.game().teams.away;
    this.homePitcher = this.homeTeam.probablePitcher;
    this.awayPitcher = this.awayTeam.probablePitcher;
  }

  getHomeTeamLogoPath() {
    return (
      '//www.mlbstatic.com/team-logos/team-cap-on-light/' +
      this.homeTeam.team.id +
      '.svg'
    );
  }

  getAwayTeamLogoPath() {
    return (
      '//www.mlbstatic.com/team-logos/team-cap-on-light/' +
      this.awayTeam.team.id +
      '.svg'
    );
  }
}
