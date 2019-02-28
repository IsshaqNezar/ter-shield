const Donnees = require('../models/donnees.model.js');

// Créer et enregistrer des données 

exports.create = (req, res) => {

    // Valider la requete 
    if(!req.body.valeur) {
        return res.status(400).send({
            message: "Vous devez envoyer une donnée"
        });

    }

    // Créer une donnée dans le DB
    const donnees = new Donnees({
        valeur: req.body.valeur,
        heure: req.body.heure || "Heure indéterminée",
    });

    // Enregistrement de la donnée sur la DB

    donnees.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreure est apparue."
        });
    });

};

// Récupérer les données depuis la base de données 

exports.findAll = (req, res) => {


};