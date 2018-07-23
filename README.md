# Project Overview

This project is a web-based application that reads RSS feeds for developers and shows relevant articles underneath each subject area. 

## How it Works
This application uses a [RSS to JSON](https://rsstojson.udacity.com/parseFeed) parser to grab RSS feeds and display the article and it's content on the page.

## How to Use
1. To start the application, open the index.html file from your internet browser
2. Click on the menu icon in the top left hand corner to see all the topics available. Click on a topic area to view articles in that feed. Click on the article title to be taken to the full article page.



### To Add RSS Feeds to the Project
1. Add RSS Name and URL to the allFeeds array in the app.js file. 
2. The RSS object must contain a name and URL.
3. Feeds must contain at least one article entry

## Testing
The project includes test suites using [Jasmine](http://jasmine.github.io/) Project includes test specs in spec/feedreader.js file. The tests include:

* Test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
* Test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Test that ensures the menu element is hidden by default.
* Test that ensures the menu changes visibility when the menu icon is clicked.
* Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

## References
1. [Udacity Feed Reader Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)
2. [Original Project Assets](http://github.com/udacity/frontend-nanodegree-feedreader)
3. [Jasmine](http://jasmine.github.io/)
4. [RSS to JSON Parser](https://rsstojson.udacity.com/parseFeed)
5. [Google Fonts](http://fonts.googleapis.com)
6. [JQuery Library](http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js)
7. [HandleBarsJS](http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js)

##Authors
* [Udacity Front End Developer NanoDegree Program Course](http://udacity.com)
* [Nikiya M. Simpson, MBA, FEND Student](http://github.com/nikiyasimpson)