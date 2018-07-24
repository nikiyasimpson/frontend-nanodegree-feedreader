
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    'use strict';
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            //Test to make sure allFeeds array is defined
            expect(allFeeds).toBeDefined();

            //Test to make sure that the allFeeds array has at least one entry in the array of RSS feeds
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has URLs defined', function(){

            allFeeds.forEach(checkURLs);

            function checkURLs(item){
                //Tests to make sure the url property for the feed is defined
                expect(item.url).toBeDefined();

                //Tests to make sure the url property has a value
                expect(item.url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has Names defined',function(){

            allFeeds.forEach(checkNames);

            function checkNames(item){

                //Tests to make sure the name property for each feed is defined
                expect(item.name).toBeDefined();

                //Tests to make sure the name property has a value defined
                expect(item.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.

         */

        it('is hidden by default', function(){

            //Tests to see if the menu div is hidden by default using the menu-hidden css class
            var body = $("body");
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('toggles open and close', function(){

            const menuIcon = $('.menu-icon-link');
            const body = $('body');

            //first click should show the menu
            menuIcon.trigger('click');

            //Tests to make sure the menu div appears when the menu icon is clicked
            expect(body.hasClass('menu-hidden')).toEqual(false);

            //second click should hide the menu again
            menuIcon.trigger('click');

            //Tests to make sure the menu div is hidden again when the menu icon is clicked again
            expect(body.hasClass('menu-hidden')).toEqual(true);
                    
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        // Before tests, load all the feeds
        beforeEach(function(done) {
            loadFeed(0,done);
        });
      
        //Count the feed entry elements under the feed container
        it('feed container has entries', function(){
            var entryElements = $('.feed .entry');

            //Tests to see make sure there is at least one entry for each feed
            expect(entryElements.length).toBeGreaterThan(0);
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function() {

        var title1, title2; 


        //Before test run load the first and second feed to compare values for tests
        beforeEach(function(done) {

            loadFeed(0, function(){
                //load the first feed and place in variable to compare
                title1 = $('.feed').html();
                //load the second feed and place in variable to compare
                loadFeed(1, function(){
                    title2 = $('.feed').html();
                    done();
                });
            });
         
        });

        it('feed content changes', function() {
            //Test to compare titles from first and second feed to make sure they aren't the same
            expect(title1).not.toBe(title2);                  
        });
     });
}());
