// * * * * * * * * * * * * *
// * * * * API SECTION * * *
// * * * * * * * * * * * * *
import _ from 'lodash';

// Lists used to match the top movie/show with its genre
const movieGenre = {
	28: 'Action',
	12: 'Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	14: 'Fantasy',
	36: 'History',
	27: 'Horror',
	10402: 'Music',
	9648: 'Mystery',
	10749: 'Romance',
	878: 'Science Fiction',
	10770: 'TV Movie',
	53: 'Thriller',
	10752: 'War',
	37: 'Western'
};
const tvGenre = {
	10759: 'Action & Adventure',
	16: 'Animation',
	35: 'Comedy',
	80: 'Crime',
	99: 'Documentary',
	18: 'Drama',
	10751: 'Family',
	10762: 'Kids',
	9648: 'Mystery',
	10763: 'News',
	10764: 'Reality',
	10765: 'Sci-Fi & Fantasy',
	10766: 'Soap',
	10767: 'Talk',
	10768: 'War & Politics',
	37: 'Western'
};

// GETTER FUNCTIONS

// The card object used in the arrays
class cardObject {
	constructor(
		id,
		key,
		category,
		subcategory,
		artURL,
		destURL,
		title,
		subtitle1,
		subtitle2
	) {
		this.id = id;
		this.key = key;
		this.category = category;
		this.subcategory = subcategory;
		this.artURL = artURL;
		this.destURL = destURL;
		this.title = title;
		this.subtitle1 = subtitle1 || null;
		this.subtitle2 = subtitle2 || null;
	}
}

// Extracts 'data' from fetch response
const loadData = async url => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

// Returns an array of HTML templates of the top movies
function updateMovieData() {
	return loadData(
		`https://api.themoviedb.org/3/trending/movie/week?api_key=8895918e5c66d703e2331fdd92606203`
	).then(responseMovies => {
		let resultsArray = [];
		responseMovies.results.forEach(item => {
			let movieSearch = encodeURIComponent(item.title);

			let movieObject = new cardObject(
				item.id, // id
				item.title, //key
				'movies', // category
				movieGenre[item.genre_ids[0]], // subcategory
				'https://image.tmdb.org/t/p/w200' + item.poster_path, // artURL
				`https://www.google.com/search?q=${movieSearch}+trailer+youtube&btnI`, // destURL
				item.title, // title
				'Rating: ' + item.vote_average, // subtitle1
				movieGenre[item.genre_ids[0]] + ' Movie' // subtitle2
			);

			resultsArray.push(movieObject);
		});

		return resultsArray;
	});
}

// Returns an array of HTML templates of the top tv shows
function updateTVData() {
	return loadData(
		`https://api.themoviedb.org/3/trending/tv/week?api_key=8895918e5c66d703e2331fdd92606203`
	).then(responseTV => {
		let resultsArray = [];
		responseTV.results.forEach(item => {
			// Create the Google 'Lucky' search query components
			let tvSearch = encodeURIComponent(item.name);

			let tvObject = new cardObject(
				item.id, // id
				item.name, //key
				'tv', // category
				tvGenre[item.genre_ids[0]], // subcategory
				'https://image.tmdb.org/t/p/w200' + item.poster_path, // artURL
				`https://www.google.com/search?q=${tvSearch}+show+trailer+youtube&btnI`, // destURL
				item.name, // title
				'Rating: ' + item.vote_average, // subtitle1
				tvGenre[item.genre_ids[0]] + ' Show' // subtitle2
			);

			resultsArray.push(tvObject);
		});

		return resultsArray;
	});
}

// Returns an array of HTML templates of top fiction books
function updateFictionBookData() {
	return loadData(
		`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=HfHxWUxYzqeXzAYx2V26or4nU9mOnw8n`
	).then(responseBooks => {
		let resultsArray = [];
		responseBooks.results.books.forEach(item => {
			// Create the Google 'Lucky' search query components
			let bookSearch = encodeURIComponent(
				item.author + ' ' + _.startCase(_.toLower(item.title))
			);

			let fictionBookObject = new cardObject(
				item.primary_isbn10, // id
				item.title, // key
				'books', // category
				'Fiction', // subcategory
				item.book_image, // artURL
				`https://www.google.com/search?q=${bookSearch}+goodreads&btnI`, // destURL
				_.startCase(_.toLower(item.title)), // title
				'NYT Fiction Rank: ' + item.rank, // subtitle1
				item.author // subtitle2
			);

			resultsArray.push(fictionBookObject);
		});

		return resultsArray;
	});
}

// Returns an array of HTML templates of top nonfiction books
function updateNonfictionBookData() {
	return loadData(
		`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=HfHxWUxYzqeXzAYx2V26or4nU9mOnw8n`
	).then(responseBooks => {
		let resultsArray = [];
		responseBooks.results.books.forEach(item => {
			// Create the Google 'Lucky' search query components
			let bookSearch = encodeURIComponent(
				item.author + ' ' + _.startCase(_.toLower(item.title))
			);

			let nonfictionBookObject = new cardObject(
				item.primary_isbn10, // id
				item.title, // key
				'books', // category
				'Nonfiction', // subcategory
				item.book_image, // artURL
				`https://www.google.com/search?q=${bookSearch}+goodreads&btnI`, // destURL
				_.startCase(_.toLower(item.title)), // title
				'NYT Nonfiction Rank: ' + item.rank, // subtitle1
				item.author // subtitle2
			);

			resultsArray.push(nonfictionBookObject);
		});

		return resultsArray;
	});
}

// Returns an array of HTML templates of top nonfiction books
function updateNewsData() {
	return loadData(
		`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=HfHxWUxYzqeXzAYx2V26or4nU9mOnw8n`
	).then(responseNews => {
		let resultsArray = [];
		let url;
		let urlCount = 0;
		responseNews.results.forEach(item => {
			let sectionTitle = '';
			// Clean up "US" so it doesn't show as U.S.:
			item.section === 'U.S.'
				? (sectionTitle = 'US')
				: (sectionTitle = item.section);

			// If the image is in the article, use it. Otherwise, default to the NYT logo.
			if (item.multimedia[1] === undefined) {
				url = 'images/times.png';
			} else {
				url = item.multimedia[1].url;
			}

			let newsObject = new cardObject(
				item.short_url, // id
				item.title, // key
				'news', // category
				item.section, // subcategory
				url, // artURL
				item.short_url, // destURL
				sectionTitle + ':  ' + item.title // title
				// subtitle1 - should default to null
				// subtitle2 - should default to null
			);

			// NOTE: I'm limiting us to 20 articles
			if (urlCount <= 20) {
				resultsArray.push(newsObject);
			}
			urlCount++;
		});

		return resultsArray;
	});
}

// Returns an array of HTML templates of top songs
function updateDeezerData() {
	return loadData(
		`https://my-little-cors-proxy.herokuapp.com/https://api.deezer.com/playlist/2098157264?limit=30`
	).then(responseMusic => {
		let resultsArray = [];
		responseMusic.tracks.data.forEach(item => {
			let musicSearch = encodeURIComponent(item.artist.name + ' ' + item.title);

			let musicObject = new cardObject(
				item.position, // id
				item.artist.name, // key
				'music', // category
				'sub', // subcategory
				item.album.cover_medium, // artURL
				`https://www.google.com/search?q=${musicSearch}+youtube&btnI`, // destURL
				item.title, // title
				item.artist.name, // subtitle1 - should default to null
				item.album.title // subtitle2 - should default to null
			);

			resultsArray.push(musicObject);
		});

		return resultsArray;
	});
}

// Returns an array of HTML templates of top songs
function updateGamingData() {
	return loadData(
		`https://newsapi.org/v2/top-headlines?apiKey=335ef27328fb481aa97916cb3c338206&pageSize=20&sources=ign,polygon`
	).then(responseGames => {
		let resultsArray = [];
		responseGames.articles.forEach(item => {
			let gamingObject = new cardObject(
				item.source.id, // id
				item.title, // key
				'gaming', // category
				item.source.name, // subcategory
				item.urlToImage, // artURL
				item.url, // destURL
				item.source.name + ':  ' + item.title // title
				// subtitle1 - should default to null
				// subtitle2 - should default to null
			);

			resultsArray.push(gamingObject);
		});

		return resultsArray;
	});
}

// Generates the initial cards
async function updateAllCards() {
	let cardArray = [];

	// let musicArray = await updateTrendMusicData();
	let movieArray = await updateMovieData();
	let tvArray = await updateTVData();
	// let nfBookArray = await updateNonfictionBookData();
	let fBookArray = await updateFictionBookData();
	let dzMusicArray = await updateDeezerData();
	let newsArray = await updateNewsData();
	let gamingArray = await updateGamingData();

	cardArray = cardArray.concat(
		await movieArray,
		await tvArray,
		// await nfBookArray,
		await fBookArray,
		await dzMusicArray,
		await newsArray,
		await gamingArray
	);

	/// Hides the loading animation
	// document.querySelector('#loadingAnimation').classList.toggle('hidden');

	// Randomizes the cards display order
	cardArray = _.shuffle(cardArray);

	// Appends them in the DOM
	// cardArray.forEach(card => {
	// 	mainContent.innerHTML += card;
	// });

	return cardArray;

	// addSignInEventListener();
}

export default updateAllCards;

updateAllCards();
