const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Donnees', DataSchema);