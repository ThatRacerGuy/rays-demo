import { Component, input } from '@angular/core';

import { Game, Team, Pitcher } from '../app.model';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
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
  month!: string;
  day!: string;
  streak!: string;

  ngOnInit() {
    this.homeTeam = this.game().teams.home;
    this.awayTeam = this.game().teams.away;
    this.homePitcher = this.homeTeam.probablePitcher;
    this.awayPitcher = this.awayTeam.probablePitcher;
    let date = this.game().officialDate.split('-');
    this.month = monthNames[parseInt(date[1]) - 1];
    this.day = date[2];

    let reverseLog = this.game().log.reverse();
    let streakCount = 1;
    for (let index = 0; index < reverseLog.length; index++) {
      if (reverseLog[index] === reverseLog[index + 1]) {
        streakCount++;
        this.streak = streakCount + ' games in a row';
      } else {
        break;
      }
    }
    this.streak = this.streak || '1 game in a row';
    this.streak = reverseLog[0] === 'W' ? 'Won ' + this.streak : 'Lost ' + this.streak;
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
