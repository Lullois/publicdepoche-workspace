#! /usr/bin/env node

console.log('This script populates some test conferences, authors, contacts, slideshows and rehearsals to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Author = require('./models/author')
var Conference = require('./models/conference')
var Contact = require('./models/contact')
var Rehearsal = require('./models/rehearsal')
var Slideshow = require('./models/slideshow')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var authors = []
var conferences = []
var contacts = []
var rehearsals = []
var slideshows = []

// CREATE functions
function authorCreate(first_name, family_name, cb) {
  authordetail = {first_name:first_name , family_name: family_name }
  
  var author = new Author(authordetail);
       
  author.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Author: ' + author);
    authors.push(author)
    cb(null, author)
  }  );
}

function conferenceCreate(title, author, summary, deadline, timer, contact, cb) {
  conferencedetail = {title:title,
		    author:author,
		    summary: summary,
		    deadline:deadline,
		    timer:timer,
		    contact:contact}
  
  var conference = new Conference(conferencedetail);
       
  conference.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Conference: ' + conference);
    conferences.push(conference)
    cb(null, conference);
  }   );
}

function contactCreate(first_name, family_name, phone, cb) {
  contactdetail = {first_name:first_name , family_name: family_name , phone:phone }
    
  var contact = new Contact(contactdetail);    
  contact.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Contact: ' + contact);
    contacts.push(contact)
    cb(null, contact)
  }  );
}


function rehearsalCreate(charisma, timing, number, slideshow, cb) {
  reheasraldetail = {  charisma: charisma, timing: timing, number: number, slideshow:slideshow}
    
  var rehearsal = new Rehearsal(reheasraldetail);    
  rehearsal.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Rehearsal: ' + rehearsal);
      cb(err, null)
      return
    }
    console.log('New Rehearsal: ' + rehearsal);
    rehearsals.push(rehearsal)
    cb(null, rehearsal)
  }  );
}

function slideshowCreate(conference, title, cb) {
	slideshowdetail = { conference: conference, title: title}
	    
	  var slideshow = new Slideshow(slideshowdetail);    
	slideshow.save(function (err) {
	    if (err) {
	      console.log('ERROR CREATING Slideshow: ' + slideshow);
	      cb(err, null)
	      return
	    }
	    console.log('New Slideshow: ' + slideshow);
	    slideshows.push(slideshow)
	    cb(null, slideshow)
	  }  );
	}

// Populating functions

function createAuthorsAndContacts(cb) {
    async.parallel([
        function(callback) {
          authorCreate('Patrick', 'Rothfuss', callback);
        },
        function(callback) {
          authorCreate('Ben', 'Bova', callback);
        },
        function(callback) {
          authorCreate('Isaac', 'Asimov', callback);
        },
        function(callback) {
          authorCreate('Bob', 'Billings', callback);
        },
        function(callback) {
          authorCreate('Jim', 'Jones', callback);
        },
        function(callback) {
            contactCreate('Jane', 'Doe', '06854228', callback);
          },
		function(callback) {
		    contactCreate('Jessy', 'Beatrix', '07854828', callback);
		}
        ],
        // optional callback
        cb);
}


function createConferences(cb) {
    async.parallel([
        function(callback) {
        	var confdate = new Date(2019,2,5,14,00,00,00);
        	conferenceCreate('The Name of the Wind', authors[0], 'I have stolen princesses back from sleeping barrow kings.', confdate, 18, contacts[0], callback);
        },
        function(callback) {
        	var confdate = new Date(2019,5,20,8,00,00,00);
        	conferenceCreate('How I bought leggings', authors[1], 'The compelling story of how I bought my last leggings.', confdate, 18, contacts[0], callback);
        }
        ],
        // optional callback
        cb);
}

function createRehearsals(cb) {
    async.parallel([
        function(callback) {
        	rehearsalCreate(50, 30, 1, slideshows[0], callback)
        },
        function(callback) {
        	rehearsalCreate(20, 100, 2, slideshows[0], callback)
        },
        function(callback) {
        	rehearsalCreate(58, 36, 1, slideshows[1], callback)
        }
        ],
        // Optional callback
        cb);
}

function createSlideshows(cb) {
    async.parallel([
        function(callback) {
        	slideshowCreate(conferences[0], 'The Name of the Wind v1', callback)
        },
        function(callback) {
        	slideshowCreate(conferences[1], 'How I bought leggings V1', callback)
        }
        ],
        // Optional callback
        cb);
}

// Main execution to populate the db
async.series([
    createAuthorsAndContacts,
    createConferences,
    createSlideshows,
    createRehearsals
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Conferences: '+conferences);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});