class GameModel {
  constructor ({gameID, gameName, type, players, age}) {
    this.gameId = gameID
    this.gameName = gameName
    this.type = type
    this.players = players
    this.age = age
  }
}

module.exports = GameModel
