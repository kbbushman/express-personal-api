// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
app.use(express.static('public'));

/*
 * HTML Endpoint
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

// for Read My API Documentation
app.get('/api', function api_index(req, res) {
  res.json({
    // woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/kbbushman/express-personal-api/blob/master/README.md",
    baseUrl: "https://safe-basin-43026.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Shows A little info about me...."},
      {method: "GET", path: "/api/movies", description: "Shows a list of all movies I like"},
      {method: "GET", path: "/api/movies/:id", description: "Shows one movie I like by id"},
      {method: "POST", path: "/api/movies", description: "Adds a new movie to the list"},
      {method: "PUT", path: "/api/movies", description: "Updates an existing movie in the list"},
      {method: "DELETE", path: "/api/movies", description: "Deletes a movie from the list"},
    ]
  })
});

// API profile page
app.get('/api/profile', function api_profile(req, res) {
  res.json({
    name: "Kenneth Bushman",
    githubLink: "https://github.com/kbbushman",
    githubProfileImage: "https://avatars0.githubusercontent.com/u/18340986?v=3&s=466",
    personalSiteLink: "http://k2sites.com",
    currentCity: "Fairfax",
    pets: [
      {name: "Fuzz Monkey", type: "cat",  color: "calico", specialAbility: "Invisibility"},
      {name: "Chlo", type: "cat",  color: "calico", specialAbility: "Telepathy"}
    ]
  })
});

// find all movies
app.get('/api/movies', function (req, res) {
  db.Movie.find(function(err, movies){
    if (err) { return console.log("index error: " + err); }
    res.json(movies);
  });
});

// find one movie by id
app.get('/api/movies/:id', function (req, res) {
  var searchMovieId = req.params.id;
  db.Movie.findOne({ _id: searchMovieId }, function(err, foundMovie) {
    res.json(foundMovie);
  });    
});

// create a new movie
app.post('/api/movies', function (req, res) {
  console.log('movies create', req.body);
  var newMovie = new db.Movie(req.body);
  newMovie.save(function handleDBMovieSaved(err, savedMovie) {
    res.json(savedMovie);
  });
});

// update a movie
app.put('/api/movies/:id', function(req,res){
  console.log('movies update', req.params);
  var movieId = req.params.id;
  var updateMovieIndex = db.Movie.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('updating movie...', deleteMovieIndex);
  var movieToUpdate = db.Movie[deleteMovieIndex];
  db.Movie.splice(updateMovieIndex, 1, req.params);
  res.json(req.params);
});

// delete a movie
app.delete('/api/movies/:id', function (req, res) {
  console.log('movies delete', req.params);
  var movieId = req.params.id;
  db.Movie.findOneAndRemove({ _id: movieId }, function (err, deletedMovie) {
    res.json(deletedMovie);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
