##Neighborhood map project

###Setting up Project:
   I'm using node.js and gulp so all the original, readable and commented HTML/CSS/JavaScript/image files are in the 'Dev' folder. The system set up in a way that if I start gulp it will start a listener and will compress any element changed in the 'Dev' folder and move it in the right place in the project folder. Check ['Dev'](https://github.com/DevRob/Udacity-WebDev-project5/tree/master/Dev) folder for commented readable codes.
   
   For the working page check this link: [Neighborhood app](http://devrob.github.io/Udacity-WebDev-project5/)

###Project Overview:

   Develop a single page application featuring a map of a neighborhood you would like to visit. Add additional functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

###How to use the app

* Search bar:

   Use the search bar to find a neighborhood you want to visit. Type city name or district. The app will focus on that area and request the 10-20 most popular places in the area.
You can even type "sushi near philly" or "gym near Manhattan" that case the search gonna return the nearby sushi restaurants / gym in the area you searched for.
Searchbar has an autocomplete feature as well, you need to choose from the dropdown with mouse or up-down arrows and hit enter. if you dont choose from autocomplete options and hit enter it will try to predict your search goal - note that the system needs at least 3 characters to able to predict your search. 

   You can filter the places returned by the search simple typing in the search bar it will update the markers and the placelist on keydown (can search for name or type "bar, restaurant, takeaway ....").

* Button toolbar:

   This toolbar dynamically changes with the neighborhood. It will show the set of the markers returned be the search. If you press one of the icon it will re-request the search in the area with different category setting. For example if you have a coffee icon it will return the 10-20 most popular coffee-shop in the area.
you can reset the search with the refresh button and it will clear the category filter and return the 10-20 most popular places in the area.

* Place list:

   On the right you can find the places correspond to the markers. Clicking on them will focus the map on the place and will open an infowindow. you can filter this list with the search bar simply start typing no need to hit enter the filter works on keydown.

* Info window:

   You can find useful information here like the name of the place, address, opening hours, wikipedia extract/link(if existing) rating and review link.
also there is a photo viewer if the place has photos you can hit the "photos" link to check out the pictures uploaded by google users.

###Resources and tools I used:

* [knockoutjs](http://knockoutjs.com/)
* [bootstrap] (http://getbootstrap.com/)
* [JQuery](https://jquery.com/)
* [Google Maps APIs](https://developers.google.com/maps/?hl=en)
* [Online image compressor](http://compresspng.com)
* [piazza Front-End Web Dev Nanodegree forum](https://piazza.com/class/i36sqlrb9xu332)
* [Dev Tools](https://developer.chrome.com/devtools/docs/rendering-settings)
* [Dawoon Choi's project5 on github](https://github.com/DawoonC/dw-neighborhood)
* [Pixlr Online photo editor](https://pixlr.com/editor/)
* [CSS Matic: The ultimate CSS tools for web designers](http://www.cssmatic.com)

* [Gulp plugins](http://gulpjs.com/plugins/)
    * [compress images with gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
    * [compress javascript with gulp-uglify](https://www.npmjs.com/package/gulp-uglify/)
    * [compress CSS with gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
    * [compress HTML with gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
    * [pipe exeption handler gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
    * [reload page upon change gulp-livereload](https://www.npmjs.com/package/gulp-livereload)
