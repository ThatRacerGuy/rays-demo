import { Component, DestroyRef, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Date } from './app.model';
import { HeaderComponent } from './header/header.component';
import { DatesComponent } from './dates/dates.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dates = signal<Date[] | undefined>(undefined);
  isFetching = signal(false);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient
      .get<{ dates: Date[] }>('https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=139&hydrate=probablePitcher,stats&startDate=2025-03-01&endDate=2025-12-31')
      .subscribe({
        next: (responseData) => {
          this.dates.set(responseData.dates);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
