const chalk = require('chalk');

class MovieCollection {
  movies = [];

  addMovie(movie) {
    this.movies.push(movie);
  }

  markAsWatched(name) {
    const foundMovie = this.movies.find(movie => movie.name === name);
    foundMovie.watched = true;
  }

  printMovieList() {
    for (const movie of this.movies) {
      const watchedIcon = movie.watched ? chalk.green("✔") : " "
      console.log(`${watchedIcon} ${movie.name} (${movie.year})`);
    }
  }
}

module.exports = MovieCollection;