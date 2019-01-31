const mongoose = require('mongoose');

const Teams = new mongoose.Schema({
    name: { type: String, default: ''},
    city: { type: String, default: ''},
    conference: { type: String, default: ''}
})

module.exports = mongoose.model('Teams', Teams);

