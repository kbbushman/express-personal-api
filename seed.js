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
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmE4MjdiZjctMjU3Ni00ZTM5LWIxNGMtNjgzZjQ2Y2Y3ZTliXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
	title: "The Godfather",
	directedBy: "Francis Ford Coppola",
	releaseDate: "03/24/1972",
	imdbPage: "http://www.imdb.com/title/tt0068646/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0Mjg5MjgwNV5BMl5BanBnXkFtZTYwNjE1NjU5._V1_.jpg",
	title: "Enter The Dragon",
	directedBy: "Robert Clouse",
	releaseDate: "08/19/1973",
	imdbPage: "http://www.imdb.com/title/tt0070034/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SY1000_CR0,0,654,1000_AL_.jpg",
	title: "Star Wars: Episode IV",
	directedBy: "George Lucas",
	releaseDate: "05/25/1977",
	imdbPage: "http://www.imdb.com/title/tt0076759/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTkxMjkxNzg3Nl5BMl5BanBnXkFtZTgwNjUyMDI3NjE@._V1_.jpg",
	title: "Dune",
	directedBy: "David Lynch",
	releaseDate: "12/14/1984",
	imdbPage: "http://www.imdb.com/title/tt0087182/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NzY4ODk4Nl5BMl5BanBnXkFtZTgwOTcxNTYxMTE@._V1_.jpg",
	title: "Full Metal Jacket",
	directedBy: "Stanley Kubrick",
	releaseDate: "07/10/1987",
	imdbPage: "http://www.imdb.com/title/tt0093058/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2OTE5MzQ3MV5BMl5BanBnXkFtZTgwMTY2NTYxMTE@._V1_.jpg",
	title: "Goodfellas",
	directedBy: "Martin Scorsese",
	releaseDate: "09/19/1990",
	imdbPage: "http://www.imdb.com/title/tt0099685/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
	title: "Pulp Fiction",
	directedBy: "Quentin Tarantino",
	releaseDate: "10/14/1994",
	imdbPage: "http://www.imdb.com/title/tt0110912/"
	},
	{
	poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NjQyMzIwM15BMl5BanBnXkFtZTcwODQyNjYyMQ@@._V1_.jpg",
	title: "Hero",
	directedBy: "Yimou Zhang",
	releaseDate: "08/27/2004",
	imdbPage: "http://www.imdb.com/title/tt0299977/"
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
