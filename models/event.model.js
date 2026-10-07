const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { // trimmed?
    type: String,
    required: [true, "Please provide an event title"]
  },
  description: {
    type: String,
    required: [false, "Please provide an event description"]
  },
  date: {
    type: Date,
    required: [true, "Please provide an event date"]
  },
  location: {
    type: String,
    required: [true, "Please provide an event location"]
  },
  capacity: {
    type: Number,
    required: [true, "Please provide an event capacity"],
    min: [1, "Capacity must be at least 1"]
  },
  category: { // enum
    type: String,
    enum: ['academic', 'social', 'sports', 'career', 'other'],
    default: 'other',
    required: [true, "Please provide an event category"]
  },
  isFree: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number,
    required: function() { return !this.isFree; }, // price is required if isFree is false
    min: [0, "Price must be a positive number"],
    default: 0

  }


},
{
    timestamps: true
}

)

eventSchema.index(
  { title: 1, date: 1 },
  { unique: true }
)

module.exports = mongoose.model('Event', eventSchema);