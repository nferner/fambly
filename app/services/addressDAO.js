const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js').address
const AddressModel = require('../models/addressModel.js')

class addressDAO {
  static all () {
    return db.map(sql.allAddresses, [], (row) => new AddressModel(row))
  }
}

module.exports = addressDAO
