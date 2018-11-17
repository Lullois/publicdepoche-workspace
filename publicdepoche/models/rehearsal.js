var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RehearsalSchema = new Schema(
  {
    charisma: {type: Number, required: true, max: 3},
    timing: {type: Number, required: true, max: 3},
    number: {type: Number, required: true, max: 50},
    slideshow: { type: Schema.Types.ObjectId, ref: 'Slideshow', required: true }, //reference to the associated slideshow
  }
);

// Virtual for rehearsal's URL
RehearsalSchema
.virtual('url')
.get(function () {
  return '/catalog/rehearsal/' + this._id;
});

//Export model
module.exports = mongoose.model('Rehearsal', RehearsalSchema);