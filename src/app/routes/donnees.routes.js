module.exports = (app) => {
    const donnees = require('../controllers/donnees.controller.js');

    // Récupérer les données 
    app.post('/data', donnees.create);

    app.get('/data', donnees.findAll);

    app.get('/data/:dataId', donnees.findOne);

    app.delete('/data/:dataId',donnees.delete );
}