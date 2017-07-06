const mongoose = require('mongoose');

const bookbagSchema = new mongoose.Schema({
  brand: {type: String, required:true},
    type: {type: String, required:true},
    size: {type: String, required: true, default: "small"},
    straps: Number,
    color: {type: String, required: true},
    pockets: Number,
    use: [{
      location: {type: String}
    }],
    description: {type: String}
})

const Bookbag = mongoose.model('Bookbag', bookbagSchema);
module.exports = Bookbag;
