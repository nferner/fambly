CREATE TABLE movies (
  movieId INTEGER,
  movieTitle VARCHAR(50)
)

CREATE TABLE games (
  gameId INTEGER,
  gameName VARCHAR(50),
  type VARCHAR(20),
  players VARCHAR(10),
  age VARCHAR(10)
)

CREATE TABLE books (
  authorId INTEGER,
  bookTitle VARCHAR(200)
)

CREATE TABLE author (
  authorID INTEGER,
  authorFirst VARCHAR(35),
  authorLast VARCHAR(35)
)
