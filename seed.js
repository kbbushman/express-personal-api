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
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0Mjg5MjgwNV5BMl5BanBnXkFtZTYwNjE1NjU5._V1_.jpg",
	title: "Enter The Dragon",
	directedBy: "Bruce Lee",
	releaseDate: "August 19, 1973",
	imdbPage: "http://www.imdb.com/title/tt0070034/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,644,1000_AL_.jpg",
	title: "Robocop",
	directedBy: "Paul Verhoeven",
	releaseDate: "July 17, 1987",
	imdbPage: "http://www.imdb.com/title/tt0093870/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2OTE5MzQ3MV5BMl5BanBnXkFtZTgwMTY2NTYxMTE@._V1_.jpg",
	title: "Goodfellas",
	directedBy: "Martin Scorsese",
	releaseDate: "September 19, 1990",
	imdbPage: "http://www.imdb.com/title/tt0099685/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
	title: "Pulp Fiction",
	directedBy: "Quentin Tarantino",
	releaseDate: "October 14, 1994",
	imdbPage: "http://www.imdb.com/title/tt0110912/"
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
	  	console.log("created", movies.length, "movies");
	  	process.exit();
	});
	}
});
