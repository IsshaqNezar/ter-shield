module.exports = (app) => {
    const data = require('../controllers/data.controller.js');

    // Récupérer les données 
    app.get('/data', data.findAll);
}