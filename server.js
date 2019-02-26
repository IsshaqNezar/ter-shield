const express = require('express');
const bodyParser = require('body-parser'); 

//  Création de app Express

const app = express();

//  requêtes d'analyse de type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// requêtes d'analyse de type - application/json
app.use(bodyParser.json())

// Configuration de la base de données 
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

// Connection à la base de données 
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//  définir une route simple
app.get('/', (req,res) => {
    res.json({"message": "Interface d'utilisateur"})
});

// Ecoute du port  
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});