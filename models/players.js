const mongoose = require('mongoose');

const Players = new mongoose.Schema({
    firstName: { type: String, default: ''},
    lastName: { type: String, default: ''},
    position: { type: String, default: ''},
    age: { type: Number, default: 0},
    team: { type: String, default: ''}
})

module.exports = mongoose.model('Players', Players);

