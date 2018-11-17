var Slideshow = require('../models/slideshow');

// Display list of all Slideshows.
exports.slideshow_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow list');
};

// Display detail page for a specific Slideshow.
exports.slideshow_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow detail: ' + req.params.id);
};

// Display Slideshow create form on GET.
exports.slideshow_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow create GET');
};

// Handle Slideshow create on POST.
exports.slideshow_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow create POST');
};

// Display Slideshow delete form on GET.
exports.slideshow_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow delete GET');
};

// Handle Slideshow delete on POST.
exports.slideshow_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow delete POST');
};

// Display Slideshow update form on GET.
exports.slideshow_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle Slideshow update on POST.
exports.slideshow_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Slideshow update POST');
};