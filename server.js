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

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/kbbushman/express_self_api/README.md", // CHANGE ME
    baseUrl: "https://safe-basin-43026..herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Shows A little info about me...."}, // CHANGE ME
      {method: "GET", path: "/api/movies", description: "Shows a list of all movies I like"},
      {method: "GET", path: "/api/movies/:id", description: "Shows one movie I like by id"},
      {method: "POST", path: "/api/movies", description: "Adds a new movie to the list"},
      {method: "PUT", path: "/api/movies", description: "Updates an existing movie in the list"},
      {method: "DELETE", path: "/api/movies", description: "Deletes a movie from the list"},
    ]
  })
});

app.get('/api/profile', function api_profile(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    name: "Kenneth Bushman",
    githubLink: "https://github.com/kbbushman",
    githubProfileImage: "https://github.com/kbbushman/express_self_api/README.md",
    personalSiteLink: "http://k2sites.com",
    currentCity: "Fairfax",
    pets: [
      {name: "Fuzz Monkey", type: "cat",  color: "calico", specialAbility: ""},
      {name: "Chlo", type: "cat",  color: "calico"}
    ]
  })
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
