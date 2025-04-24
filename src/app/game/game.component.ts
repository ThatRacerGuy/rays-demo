import { Component, input } from '@angular/core';

import { Game, Team, Pitcher } from '../app.model';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
]

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
  date!: string;
  month!: string;
  day!: number;

  ngOnInit() {
    this.homeTeam = this.game().teams.home;
    this.awayTeam = this.game().teams.away;
    this.homePitcher = this.homeTeam.probablePitcher;
    this.awayPitcher = this.awayTeam.probablePitcher;
    this.date = this.game().officialDate;
    let dateCalc = new Date(this.date);
    this.month = monthNames[dateCalc.getMonth()];
    this.day = dateCalc.getDate();
  }

  getHomeTeamLogoPath() {
    // Use every TeamId to get image from MLB website
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
