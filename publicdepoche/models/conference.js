var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ConferenceSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    deadline: {type: Date, required: true},
    timer: {type: Number, required: true},
    contact: [{type: Schema.Types.ObjectId, ref: 'Contact'}]
  }
);

// Virtual for conference's URL
ConferenceSchema
.virtual('url')
.get(function () {
  return '/catalog/conference/' + this._id;
});

//Export model
module.exports = mongoose.model('Conference', ConferenceSchema);