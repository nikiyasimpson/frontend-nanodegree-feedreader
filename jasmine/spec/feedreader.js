"use strict";

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
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has URLs defined',function(){
            for(var feed in allFeeds){
               
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);

            }

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

           it('has Names defined',function(){
            for(var feed in allFeeds){
            
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).not.toBe(0);

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
                expect(body.hasClass('menu-hidden')).toEqual(false);

                //second click should hide the menu again
                menuIcon.trigger('click');
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


            beforeEach(function(done) {
                loadFeed(0,done);
                });
      
            //Count the feed entry elements under the feed container
            it('feed container has entries', function(){
                var allFeedElements = $( ".entry" );
                var entryElements = $('.feed').find(allFeedElements);
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
            beforeEach(function(done) {

                    //load first feed and record the title
                    loadFeed(0, done); 
                    title1 =  $('.header-title')[0].textContent;
                    done();

                    //load the second feed and record the title
                    loadFeed(1, done); 
                    title2 =  $('.header-title')[0].textContent;
                    done();
         
            });

            it('feed content changes', function() {
                //compare titles from first and second feed
                expect(title1).not.toBe(title2);                  
            });
     });
}());
