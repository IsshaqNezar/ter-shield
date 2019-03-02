const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    valeur: String,
    heure: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Donnee', DataSchema);