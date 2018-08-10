const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js')
const Movie = require('../models/movieModel.js')

class movieDAO {
  static all () {
    return db.map(sql.allMovies, [], (row) => new Movie(row))
  }
}

module.exports = movieDAO
