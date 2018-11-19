//- Copyright 2016 Google Inc. All Rights Reserved.
//- Licensed under the Apache License, Version 2.0 (the "License");
//- you may not use this file except in compliance with the License.
//- You may obtain a copy of the License at
//-     http://www.apache.org/licenses/LICENSE-2.0
//- Unless required by applicable law or agreed to in writing, software
//- distributed under the License is distributed on an "AS IS" BASIS,
//- WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//- See the License for the specific language governing permissions and
//- limitations under the License.
var Rehearsal = require('../models/rehearsal');

// Display list of all Rehearsals.
exports.rehearsal_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Rehearsal list');
};

// Display detail page for a specific Rehearsal.
exports.rehearsal_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Rehearsal detail: ' + req.params.id);
};

// Display Rehearsal create form on GET.
exports.rehearsal_create_get = function(req, res) {
	res.render('rehearsal', { title: 'Rehearsal Recording'});
//	res.send('NOT IMPLEMENTED: Rehearsal create GET');
};

// Handle Rehearsal create on POST.
exports.rehearsal_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Rehearsal create POST');
};

// Display Rehearsal delete form on GET.
exports.rehearsal_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Rehearsal delete GET');
};

// Handle Rehearsal delete on POST.
exports.rehearsal_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Rehearsal delete POST');
};

// Display Rehearsal update form on GET.
exports.rehearsal_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Contact update GET');
};

// Handle Rehearsal update on POST.
exports.rehearsal_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Rehearsal update POST');
};