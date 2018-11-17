var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SlideshowSchema = new Schema(
  {
    conference: { type: Schema.Types.ObjectId, ref: 'Conference', required: true }, //reference to the associated conference
    title: {type: String, required: true}
  }
);

// Virtual for Slideshow's URL
SlideshowSchema
.virtual('url')
.get(function () {
  return '/catalog/slideshow/' + this._id;
});

//Export model
module.exports = mongoose.model('Slideshow', SlideshowSchema);