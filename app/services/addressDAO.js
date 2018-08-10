const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js').address
const Address = require('../models/addressModel.js')

class addressDAO {
  static all () {
    return db.map(sql.allAddresses, [], (row) => new Address(row))
  }
}

module.exports = addressDAO
