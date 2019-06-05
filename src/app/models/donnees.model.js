const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    valeur: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Donnee', DataSchema);
