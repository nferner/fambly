const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js')
const GameModel = require('../models/gameModel.js')

class gameDAO {
  static all () {
    return db.map(sql.allGames, [], (row) => new GameModel(row))
  }
}

module.exports = gameDAO
