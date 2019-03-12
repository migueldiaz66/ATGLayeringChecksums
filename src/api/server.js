const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var _ = require('lodash');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const dbConfig = require('../../config/database.config.js');
const mongoose = require('mongoose');

const config = require('../../config/config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
var finalConfig = _.merge(defaultConfig, environmentConfig);

mongoose.Promise = global.Promise;

mongoose.connect(finalConfig.url, {
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

app.get('/', (req, res) => {
    res.send("API for ATG Layering Checksums Consistency --- Infra Backoffice Liverpool --- mdiazm01@liverpool.com.mx");
});

require('./routes/router')(app, 'SERVERPROD_vs_SERVERPRODHA', 'SHA1_Diff_SERVERPROD_vs_SERVERPRODHA');
require('./routes/router')(app, 'SVNPROD_vs_SERVERPROD', 'SHA1_Diff_SVNPROD_vs_SERVERPROD');
require('./routes/router')(app, 'SVNPROD_vs_SVNPRODHA', 'SHA1_Diff_SVNPROD_vs_SVNPRODHA');
require('./routes/router')(app, 'SVNPRODHA_vs_SERVERPRODHA', 'SHA1_Diff_SVNPRODHA_vs_SERVERPRODHA');

app.listen(finalConfig.appPort, '0.0.0.0', () => {
    console.log("Server is listening on port " + finalConfig.appPort);
});