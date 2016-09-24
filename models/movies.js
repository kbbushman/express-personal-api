var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var MovieSchema = new Movie({
  title: String,
  moviePoster: String,
  releaseDate: String,
  rating: String,
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;