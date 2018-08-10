const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js').books
const Book = require('../models/bookModel.js')

class booksDAO {
  static all () {
    return db.map(sql.allBooks, [], (row) => new Book(row))
  }
}

module.exports = booksDAO
