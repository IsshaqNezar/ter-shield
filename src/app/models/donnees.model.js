const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Donnee', DataSchema);