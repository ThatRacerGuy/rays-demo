export interface Date {
  date: string
  games: Game[]
  totalEvents: number
  totalGames: number
  totalGamesInProgress: number
  totalItems: number
}

export interface Game {
  gameGuid: string
  gameType: string
  officialDate: string
  season: number
  seasonDisplay: string
  status: Status
  teams: {
    home: Team
    away: Team
  }
}

export interface Team {
  isWinner: boolean
  leagueRecord: {
    wins: number
    losses: number
    pct: string
  }
  score: number
  seriesNumber: number
  splitSquad: boolean
  team: {
    id: string
    name: string
  }
}

export interface Status {
  abstractGameCode: string
  statusCode: string
}
