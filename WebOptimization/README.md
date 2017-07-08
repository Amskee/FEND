# Website Optimization: Critical Rendering Path and 60 fps Pizza app

## Running the website

* Links to live website
	* Link to the [github repo](https://github.com/Amskee/FEND/tree/master/WebOptimization).
	* Link to [live website](https://amskee.github.io/FEND/WebOptimization/index.html).
	* Link to [live pizza app](https://amskee.github.io/FEND/WebOptimization/views/pizza.html).
	* Link to [PageSpeed results](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Famskee.github.io%2FFEND%2FWebOptimization%2Findex.html).

* Running the website locally
	* Download the zip file.
	* Extract the zip file.
	* Open the index.html in any modern browser to run the website.
	* Open pizza.html in the "views" directory to run the pizza app.

## Optimizations 

* Optimizations in website
	* JavaScript resources are given `async` attribute to avoid render blocking.
	* Certain CSS resources are given `media="print"` attribute to avoid parser blocking.
	* Certain CSS are written internally.
	* JavaScript related to analytics are taken to the end of the document.

* Optimizations in pizza app
	* JavaScript has been updated. Refer comments in `main.js` for detail description.
	* Layout thrashing has been removed by separating recalculate layout and styles code in JS.
	* Changing pizza size function has been optimized to run under 5 ms.
