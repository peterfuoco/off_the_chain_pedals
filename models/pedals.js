const mongoose = require('mongoose');

const guitaristSchema = new mongoose.Schema({
    Name:  { type: String, required: true },
    Price:  { type: Number, required: true },
    Analog: Boolean
});

const Guitarist = mongoose.model('Guitarist', guitaristSchema);

module.exports = Guitarist;


// change to pedals , then adjust schema to guitarist with multiple pedals (array of strings, etc)