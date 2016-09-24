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


/*
MOVIES SEED
***************************************/
var db = require('./models');

var new_movie = [
	{
	title: "Enter The Dragon",
	moviePoster: "http://www.fatmovieguy.com/wp-content/uploads/2014/12/Enter-the-Dragon-Movie-Poster.jpg",
	releaseDate: "August 19, 1973",
	rating: "5/5"
	},
	{
	title: "Robocop",
	moviePoster: "http://4.bp.blogspot.com/-Z1IjZ9u9OeA/UAO53lRryFI/AAAAAAAAI4E/R_w5gSYFrjw/s1600/Robocop+%281987%29+1.jpg",
	releaseDate: "July 17, 1987",
	rating: "4/5"
	},
	{
	title: "Goodfellas",
	moviePoster: "http://vignette4.wikia.nocookie.net/mafia/images/5/59/GoodFellas_film_poster.jpg/revision/latest?cb=20121012120210",
	releaseDate: "September 19, 1990",
	rating: "5/5"
	},	
];

db.Movie.create(new_movie, function(err, movies){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created 2 new movies", movies)
  process.exit(); // we're all done! Exit the program.
})

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