(function(){
	//calls printQuote when the page loads

	// event listener to trigger the first quote when the page loads
	window.addEventListener('load', printQuote, false);

	// event listener to respond to clicks on the page
	// when user clicks anywhere on the page, the "makeQuote" function is called
	document.getElementById('loadQuote').addEventListener("click", printQuote, false);


	//all variables
	var clone = new Array(),
		intervalId;


	//resets the extra arrays after ALL quotes have been displayed
	const reset = () => clone = quotes.slice();

	//New qoute generated after timeout
	const refreshTimer = () => intervalId  = setTimeout(printQuote, 30000);

	//returns the randomly selected quote object
	//needs to return the object of i before splicing i from the array - how to do it?
	const getQuote = () => {
	    if (clone.length === 0) {
	        reset();
	    }
	    return clone.splice(getRandomIndex(clone), 1).pop();
	}

	//selects a random quote object from the quotes array
	const getRandomIndex = (array) => Math.floor(Math.random()* array.length );

	function getRandomRGB() {
		const red = Math.floor(Math.random()* 256);
		const green = Math.floor(Math.random()* 256);
		const blue = Math.floor(Math.random()* 256);
		return rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	}



	//calls getRandomQuote function and stores it in a variable
	function printQuote() {
		const quote = getQuote();
		const backgroundRGB = getRandomRGB();
		var message = '';

		message += '<p class="quote">' + quote.quote + '</p>';
		message += '<p class="source">' + quote.source + '';
		if (quote.citation !== '') {
			message += '<span class="citation">' + quote.citation + '</span>';
		}
		if (quote.year !== '') {
			message += '<span class="year">' + quote.year + '</span>';
		}
		message += '</p>';

		document.getElementById('quote-box').innerHTML = message;
		document.body.style.backgroundColor = backgroundRGB;
		window.clearTimeout(intervalId);
		refreshTimer();
	}
}())
