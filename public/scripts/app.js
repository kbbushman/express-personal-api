console.log("Sanity Check: JS is working!");
var template;

$(document).ready(function(){

	$moviesList = $('#movies-list');

	// compile handlebars template
	var source = $('#movies-template').html();
	template = Handlebars.compile(source);

	$.ajax({
	method: 'GET',
	url: '/api/movies',
	success: showSuccess,
	error: showError
	});

	// helper function to render all posts to view
	// note: we empty and re-render the collection each time our post data changes
	function render () {
	// remove existing movies from view
	$moviesList.empty();

	// pass `allMovies` into the template function
	var moviesHtml = template({ movies: allMovies });

	// append html to the view
	$moviesList.append(moviesHtml);
	};

	function showSuccess(json) {
	allMovies = json;
	render();
	}

	function showError(e) {
	console.log('Error rendering movies...');
	$('#movies-list').text('Unable to show movies...');
	}



});
