import { Component, DestroyRef, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isFetching = signal(false);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient
      .get<{ dates: any }>('https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=139&hydrate=probablePitcher,stats&startDate=2025-03-01&endDate=2025-12-31')
      .subscribe({
        next: (resData) => {
          console.log(resData.dates);
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
