var Conference = require('../models/conference');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all Conferences.
exports.conference_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference list');
};

// Display detail page for a specific Conference.
exports.conference_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference detail: ' + req.params.id);
};

// Display Conference create form on GET.
exports.conference_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference create GET');
};

// Handle Conference create on POST.
exports.conference_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference create POST');
};

// Display Conference delete form on GET.
exports.conference_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference delete GET');
};

// Handle Conference delete on POST.
exports.conference_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference delete POST');
};

// Display Conference update form on GET.
exports.conference_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference update GET');
};

// Handle Conference update on POST.
exports.conference_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Conference update POST');
};