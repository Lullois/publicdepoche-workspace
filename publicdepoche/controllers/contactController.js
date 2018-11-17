var Contact = require('../models/contact');

// Display list of all Contacts.
exports.contact_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact list');
};

// Display detail page for a specific Contact.
exports.contact_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact detail: ' + req.params.id);
};

// Display Contact create form on GET.
exports.contact_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact create GET');
};

// Handle Contact create on POST.
exports.contact_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact create POST');
};

// Display Contact delete form on GET.
exports.contact_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact delete GET');
};

// Handle Contact delete on POST.
exports.contact_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact delete POST');
};

// Display Contact update form on GET.
exports.contact_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact update GET');
};

// Handle Contact update on POST.
exports.contact_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact update POST');
};