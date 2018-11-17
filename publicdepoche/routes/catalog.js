var express = require('express');
var router = express.Router();

// Require controller modules.
var author_controller = require('../controllers/authorController');
var conference_controller = require('../controllers/conferenceController');
var contact_controller = require('../controllers/contactController');
var rehearsal_controller = require('../controllers/rehearsalController');
var slideshow_controller = require('../controllers/slideshowController');

/// AUTHOR ROUTES ///

//GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get);

//POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

//GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get);

//POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post);

//GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get);

//POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post);

//GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

//GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// conference ROUTES ///

// GET catalog home page.
router.get('/', conference_controller.index);

// GET request for creating a Conference. NOTE This must come before routes that display Conferences (uses id).
router.get('/conference/create', conference_controller.conference_create_get);

// POST request for creating Book.
router.post('/conference/create', conference_controller.conference_create_post);

// GET request to delete Book.
router.get('/conference/:id/delete', conference_controller.conference_delete_get);

// POST request to delete Book.
router.post('/conference/:id/delete', conference_controller.conference_delete_post);

// GET request to update Book.
router.get('/conference/:id/update', conference_controller.conference_update_get);

// POST request to update Book.
router.post('/conference/:id/update', conference_controller.conference_update_post);

// GET request for one Book.
router.get('/conference/:id', conference_controller.conference_detail);

// GET request for list of all Book items.
router.get('/conferences', conference_controller.conference_list);

/// contact ROUTES ///

// GET request for creating a contact. NOTE This must come before route that displays contact (uses id).
router.get('/contact/create', contact_controller.contact_create_get);

//POST request for creating Genre.
router.post('/contact/create', contact_controller.contact_create_post);

// GET request to delete Genre.
router.get('/contact/:id/delete', contact_controller.contact_delete_get);

// POST request to delete Genre.
router.post('/contact/:id/delete', contact_controller.contact_delete_post);

// GET request to update Genre.
router.get('/contact/:id/update', contact_controller.contact_update_get);

// POST request to update Genre.
router.post('/contact/:id/update', contact_controller.contact_update_post);

// GET request for one Genre.
router.get('/contact/:id', contact_controller.contact_detail);

// GET request for list of all Genre.
router.get('/contacts', contact_controller.contact_list);

/// REHEARSAL ROUTES ///

// GET request for creating a rehearsal. NOTE This must come before route that displays rehearsal (uses id).
router.get('/rehearsal/create', rehearsal_controller.rehearsal_create_get);

// POST request for creating BookInstance. 
router.post('/rehearsal/create', rehearsal_controller.rehearsal_create_post);

// GET request to delete BookInstance.
router.get('/rehearsal/:id/delete', rehearsal_controller.rehearsal_delete_get);

// POST request to delete BookInstance.
router.post('/rehearsal/:id/delete', rehearsal_controller.rehearsal_delete_post);

// GET request to update BookInstance.
router.get('/rehearsal/:id/update', rehearsal_controller.rehearsal_update_get);

// POST request to update BookInstance.
router.post('/rehearsal/:id/update', rehearsal_controller.rehearsal_update_post);

// GET request for one BookInstance.
router.get('/rehearsal/:id', rehearsal_controller.rehearsal_detail);

// GET request for list of all BookInstance.
router.get('/rehearsal', rehearsal_controller.rehearsal_list);

/// SLIDESHOW ROUTES ///

//GET request for creating a slideshow. NOTE This must come before route that displays slideshow (uses id).
router.get('/slideshow/create', slideshow_controller.slideshow_create_get);

//POST request for creating BookInstance. 
router.post('/slideshow/create', slideshow_controller.slideshow_create_post);

//GET request to delete BookInstance.
router.get('/slideshow/:id/delete', slideshow_controller.slideshow_delete_get);

//POST request to delete BookInstance.
router.post('/slideshow/:id/delete', slideshow_controller.slideshow_delete_post);

//GET request to update BookInstance.
router.get('/slideshow/:id/update', slideshow_controller.slideshow_update_get);

//POST request to update BookInstance.
router.post('/slideshow/:id/update', slideshow_controller.slideshow_update_post);

//GET request for one BookInstance.
router.get('/slideshow/:id', slideshow_controller.slideshow_detail);

//GET request for list of all BookInstance.
router.get('/slideshow', slideshow_controller.slideshow_list);

module.exports = router;