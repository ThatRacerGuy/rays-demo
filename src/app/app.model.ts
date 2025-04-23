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
  status: Status
}

export interface Status {
  abstractGameCode: string
  statusCode: string
}
