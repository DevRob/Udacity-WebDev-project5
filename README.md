Neighborhood map project

###Setting up Project:
   I installed node.js and gulp than re-organised the project folder so all the original HTML/CSS/JavaScript/images is in the 'Dev' folder. The system set up in a way that if I start gulp it will start a listener and will compress any element changed in the 'Dev' folder and move it in the right place in the project folder. <br/>Check ['Dev'](https://github.com/DevRob/Udacity-WebDev-project4/tree/master/Dev) folder for commented readable codes.

###Project Overview:

Develp a single page application featuring a map of a neighborhood you would like to visit. Add additional functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

###How to use the app

* Search bar:

Use the search bar to find a neighborhood you want to visit. Type city name or district. The app will focus on thet area and request the 10-20 most popular places in the area.
You can even type "sushi near philly" or "gym near Manhattan" that case the search gonna return the nearby sushi restaurants / gym in the area you searchrd for.
Searchbar has an autocomplete feature as well. You can filter the places returned by the search simple typing in the searchbar it will update the markers and the placelist on keydown (can search for name or type "bar, restaurant, takeaway ....").

* Button toolbar:

This toolbar dinamically changes with the neighborhood. It will show the set of the markers returned be the search. If you press one of the icon it will re-request the search in the area with different category setting. For example if you have a coffee icon it will return the 10-20 most popular coffe-shop in the area.
you can reset the search with the refres button and it will clear the category filter and return the 10-20 most popular places in the area.

* Place list:

on the right you can find the places correspond to the markers. Clicking on the will focus the map on the place and will open an info window. you can filter this list with the searchbar simple start typing no need to hit enter the filter works on keydown.

* Info window:

You can find useful information here like the name of the place, address, opening hours, wikipedia extract/link(if existing) rating and review link.
alsa there is a photo viewer if the place has photos you can hit the "photos" link to check out the pictures uploaded by google users.

###Resources and tools I used:

* [knockoutjs](http://knockoutjs.com/)
* [bootstrap] (http://getbootstrap.com/)
* [JQuery](https://jquery.com/)
* [Google Maps APIs](https://developers.google.com/maps/?hl=en)
* [Online image compressor](http://compresspng.com)
* [piazza Front-End Web Dev Nanodegree forum](https://piazza.com/class/i36sqlrb9xu332)
* [Dev Tools](https://developer.chrome.com/devtools/docs/rendering-settings)
* [Dawoon Choi's project5 on github](https://github.com/DawoonC/dw-neighborhood)
* [CSS Matic: The ultimate CSS tools for web designers](http://www.cssmatic.com/gradient-generator#'\-moz\-linear\-gradient\%28left\%2C\%20rgba\%2827\%2C82\%2C136\%2C1\%29\%200\%25\%2C\%20rgba\%28101\%2C138\%2C175\%2C1\%29\%2028\%25\%2C\%20rgba\%28105\%2C141\%2C177\%2C1\%29\%20100\%25\%29\%3B')
* [Pixlr Online photo editor](https://pixlr.com/editor/)

* [Gulp plugins](http://gulpjs.com/plugins/)
    * [compress images with gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
    * [compress javascript with gulp-uglify](https://www.npmjs.com/package/gulp-uglify/)
    * [compress CSS with gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
    * [compress HTML with gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
    * [pipe exeption handler gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
    * [reload page upon change gulp-livereload](https://www.npmjs.com/package/gulp-livereload)
