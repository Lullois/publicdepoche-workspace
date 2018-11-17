var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    phone: {type: String, required: true, max: 15}
  }
);

// Virtual for contact's full name
ContactSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for contact's URL
ContactSchema
.virtual('url')
.get(function () {
  return '/catalog/contact/' + this._id;
});

//Export model
module.exports = mongoose.model('Contact', ContactSchema);