var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: String,
  directedBy: String,
  releaseDate: String
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
