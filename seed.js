// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');

/*
MOVIES SEED
***************************************/

var new_movie = [
	{
	title: "Enter The Dragon",
	director: "Bruce Lee",
	releaseDate: "August 19, 1973"
	},
	{
	title: "Robocop",
	director: "Paul Verhoeven",
	releaseDate: "July 17, 1987"
	},
	{
	title: "Goodfellas",
	director: "Martin Scorsese",
	releaseDate: "September 19, 1990"
	},
	{
	title: "Pulp Fiction",
	director: "Quentin Tarantino",
	releaseDate: "October 14, 1994"
	}
];

// remove all records that match {} -- which means remove ALL records
db.Movie.remove({}, function(err, movies){
	if(err) {
		console.log('Error occurred in remove', err);
	} else {
		console.log('removed all movies');

	// create new records based on the array books_list
	db.Movie.create(new_movie, function(err, movies){
	  if (err) { return console.log('err', err); }
	  	console.log("created", movies.length, "movie");
	  	process.exit();
	});
	}
});
