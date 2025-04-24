import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  teamId = input.required<string>();

  getLogoPath() {
    // Use Rays team ID to get image from MLB website
    return (
      '//www.mlbstatic.com/team-logos/team-cap-on-dark/' +
      this.teamId() +
      '.svg'
    );
  }
}
