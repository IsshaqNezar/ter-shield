const Donnee = require('../models/donnees.model.js');

// Créer et enregistrer des données 

exports.create = (req, res) => {

    // Valider la requete 
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Vous devez envoyer une donnée"
        });

    }

    // Créer une donnée dans le DB
    const donnee = new Donnee({
        valeur: req.body.valeur,
        date: req.body.date || "Date indéterminée",
    });

    // Enregistrement de la donnée sur la DB

    donnee.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est apparue."
        });
    });

};

// Récupérer les données depuis la DB

exports.findAll = (req,res) =>  {
    Donnee.find()
    .then(donnees => {
        res.send(donnees);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est apparue."
        });
    });

};

// Récupérer une donnée de la DB
exports.findOne = (req, res) => {
    Donnee.findById(req.params.dataId)
    .then(donnee =>{
        if(!donnee) {
            return res.status(404).send({
                message: "La donnée n'a pas été trouvée" + req.params.dataId
            });
        }
        res.send(donnee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Donnée non trouvée" + req.params.dataId
            });
        }
        return res.status(500).send({
            message: "Erreur lors de la récupération" + req.params.dataId
        });
    });

};