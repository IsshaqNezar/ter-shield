
//Import d'Express et de body-parser

const express = require('express');
const bodyParser = require('body-parser'); 


//  Création de app Express

const app = express();


const expressWs = require('express-ws')(app);

//  requêtes d'analyse de type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// requêtes d'analyse de type - application/json
app.use(bodyParser.json())

app.use(function(req, res, next){

    //Site web autorisés à se connecter
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Méthodes à autoriser
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.use(express.static('src'));




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

require('./src/app/routes/donnees.routes.js') (app);

// Ecoute du port  
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 5000");
});
