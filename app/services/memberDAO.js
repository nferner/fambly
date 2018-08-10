const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js')
const Member = require('../models/memberModel.js')

class memberDAO {
  static all () {
    return db.map(sql.allMembers, [], (row) => new Member(row))
  }
}

module.exports = memberDAO
