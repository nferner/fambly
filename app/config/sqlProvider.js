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
  }
}

module.exports = sqlProvider
