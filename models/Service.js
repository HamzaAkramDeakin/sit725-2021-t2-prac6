const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Service || mongoose.model('Service', schema);
