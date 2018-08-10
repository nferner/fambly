const db = require('../config/db.js')
const sql = require('../config/sqlProvider.js')
const MemberModel = require('../models/memberModel.js')

class memberDAO {
  static all () {
    return db.map(sql.allMembers, [], (row) => new MemberModel(row))
  }
}

module.exports = memberDAO
