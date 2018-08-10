const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js')
const Game = require('../models/gameModel.js')

class gameDAO {
  static all () {
    return db.map(sql.allGames, [], (row) => new Game(row))
  }
}

module.exports = gameDAO
