console.log("Sanity Check: JS is working!");

var template;
var $moviesList;
var allMovies = [];

$(document).ready(function(){

	$moviesList = $('#movie-list');

	// compile handlebars template
	var source = $('#movies-template').html();
	template = Handlebars.compile(source);

	// add Movies DB to home page view without page refresh
	$.ajax({
		method: 'GET',
		url: '/api/movies',
		success: showSuccess,
		error: showError
	});

	// add a new movie to Movies DB without page refresh
	$('#newMovieForm').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
		  method: 'POST',
		  url: '/api/movies',
		  data: $(this).serialize(),
		  success: newMovieSuccess,
		  error: newMovieError
		});
	});

	// delete a movie from the Movies DB without page refresh
	$moviesList.on('click', '.deleteBtn', function() {
		console.log('clicked delete button to', '/api/movies/'+$(this).attr('data-id'));
		$.ajax({
			method: 'DELETE',
			url: '/api/movies/'+$(this).attr('data-id'),
			success: deleteMovieSuccess,
			error: deleteMovieError
		});
	});

});


// first remove all movies, then render all movies to home page view
function render() {
	// remove existing movies from view
	$moviesList.empty();
	// pass `allMovies` into the template function
	var moviesHtml = template({ movies: allMovies });
	// append html to the view
	$moviesList.append(moviesHtml);
};

// render Movies DB to home page view
function showSuccess(json) {
	allMovies = json;
	console.log("Got all movies");
	render();
};

// error if unable to render movies to home page view
function showError(e) {
	console.log('Error rendering movies...');
	$('#movies-list').text('Unable to show movies...');
};

// adds new movie from form data on home page view
function newMovieSuccess(json) {
	$('#newMovieForm input').val('');
	allMovies.push(json);
	render();
}

// error if unable to add new movie from form data on home page view
function newMovieError() {
	console.log('Unable to add new movie...');
}

// deletes movie by id from home page view
function deleteMovieSuccess(json) {
  var movie = json;
  console.log(json);
  var movieId = movie._id;
  console.log('delete movie', movieId);
  // find the book with the correct ID and remove it from our allBooks array
  for(var index = 0; index < allMovies.length; index++) {
    if(allMovies[index]._id === movieId) {
      allMovies.splice(index, 1);
      break;  // movie found - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

// error if unable to delete movie by id from home page view
function deleteMovieError() {
  console.log('Unble to delete movie...');
}
