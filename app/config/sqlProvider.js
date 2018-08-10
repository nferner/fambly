const QueryFile = require('pg-promise').QueryFile

const path = require('path')

function sql(file) {
  const fullPath = path.join(__dirname, file)
  return new QueryFile(fullPath, {minify: true})
}

const sqlProvider = {
  books: {
    allBooks: sql('./sql/entertainment/books/allBooks.sql')
  },
  games: {
    allGames: sql('./sql/entertainment/games/allGames.sql')
  },
  movies: {
    allMovies: sql('./sql/entertainment/movies/allMovies.sql')
  },
  member: {
    allMembers: sql('./sql/family/member/allMembers.sql')
  },
  address: {
    allAddresses: sql('./sql/family/address/allAddresses.sql')
  }
}

module.exports = sqlProvider
