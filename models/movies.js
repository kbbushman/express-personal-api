var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MovieSchema = new Schema({
  poster: String,
  title: String,
  directedBy: String,
  releaseDate: String,
  imdbPage: String
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
