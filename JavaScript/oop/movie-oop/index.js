
const MovieCollection = require('./MovieCollection');
const Movie = require('./Movie');

const collection = new MovieCollection();

const movie1 = new Movie("Die Hard", 1988, "Action")
const movie2 = new Movie("Star Wars", 1977, "Science Fiction")
const movie3 = new Movie("Empire Strikes Back", 1980, "Science Fiction")
const movie4 = new Movie("Return of the Jedi", 1983, "Science Fiction")

console.log(movie1);

collection.addMovie(movie1)
collection.addMovie(movie2)
collection.addMovie(movie3)
collection.addMovie(movie4)

console.log(collection);

collection.markAsWatched("Die Hard")
collection.markAsWatched("Star Wars")

collection.printMovieList()

