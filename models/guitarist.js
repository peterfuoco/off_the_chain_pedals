const mongoose = require('mongoose');

const guitaristSchema = new mongoose.Schema({
    // Type: { type: String, required: true },
    Name:  { type: String, required: true },
    Pedals:  {type: Array, required: true },
    Image: String
});

const guitarist = mongoose.model('guitarist', guitaristSchema);

module.exports = guitarist;