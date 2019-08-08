const mongoose = require('mongoose');

const guitaristSchema = new mongoose.Schema({
    // Type: { type: String, required: true },
    Name:  { type: String, required: true },
    Pedals: [{
        Name:  { type: String, required: true },
        Price:  { type: Number, required: true },
        Analog: Boolean
    }
],
    Image: String,
    Show: String
});

const guitarist = mongoose.model('guitarist', guitaristSchema);

module.exports = guitarist;
//create seed route, put initial data, then an index route to render, 
// 

