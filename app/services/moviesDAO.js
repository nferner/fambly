const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js')
const MovieModel = require('../models/movieModel.js')

class movieDAO {
  static all () {
    return db.map(sql.allMovies, [], (row) => new MovieModel(row))
  }
}

module.exports = movieDAO
