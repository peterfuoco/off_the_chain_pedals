const mongoose = require('mongoose');

const guitaristSchema = new mongoose.Schema({
    // Type: { type: String, required: true },
    Name:  { type: String, required: true },
    Price:  { type: Number, required: true },
    Analog: Boolean
});

const pedalBoard = mongoose.model('pedalBoard', guitaristSchema);

module.exports = pedalBoard;


// change to pedals , then adjust schema to guitarist with multiple pedals (array of strings, etc)
// 