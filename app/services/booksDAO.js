const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js').books
const BookModel = require('../models/bookModel.js')

class booksDAO {
  static all () {
    return db.map(sql.allBooks, [], (row) => new BookModel(row))
  }
}

module.exports = booksDAO
