# Tampa Bay Rays FE Developer Mini Project - John Jennings

## Requirements
- Display a list of past Rays games this year, their scores, the starting pitchers, and some of their stats for each game using
https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=139&hydrate=probablePitcher,stats&startDate=2025-03-01&endDate=2025-06-01
- Please ignore all games in the future
- Design the app however you want, providing you use any modern JavaScript framework or library
- Add any behavior or functionality you feel would add to the overall UX of the app
- Include a readme file on how we can run it

## Satisfaction of Requirements
- App shows all regular season completed games, in date order, with data from the statsapi.mlb.com, with the following:
    - Away and home teams
    - The game score
    - Starting pitchers (away and home) and a stats summary
- App uses Angular framework with components, such as a header and an individual game component
- The Rays' overall record is show at the top of the page
- The game date is shown is simple form
- Each team logo is shown for visual enhancement from the team's ID given in JSON
- Away and home teams are shown with their record following the game

## Notes
- The list of completed games does NOT include Sprint Training or Playoff games
    - Those games are filtered out in code in the dates component
- Although there are no double-header days so far in 2025, each game would be shown
- The feed does not contain dates with no games, but it is also verified in code to check if a game is present on a date
- The starting pitcher stats are deep in the JSON output, and in particular the stats for hitting/pitching are assumed in the same order each game

## Other comments
Given more development time, other areas of improvement could include the following:
- Handling of home/away team data to minimize duplicate variable structure for team data
- Investigate individual components for game data, such as date, team, and stats
- Add additional styling to match existing internal Rays web properties
