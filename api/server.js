const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Connecting to the database 

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now... ' + err);
    process.exit();
}); 

 app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

// define a simple route
app.get('/', (req, res) => {
    res.send( "API for ATG Layering Checksums Consistency --- Infra Backoffice Liverpool --- mdiazm01@liverpool.com.mx" );
});

//require('./routes/routes.js')(app);

// listen for requests
app.listen(9002,'0.0.0.0', () => {
    console.log("Server is listening on port 9002");
});