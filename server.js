
// setting up =======================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')


// configuration =====================================================
mongoose.connect('mongodb://<nodetodo>:<password1>mongodb://<dbuser>:<dbpassword>@ds151631.mlab.com:51631/nodotodo')

app.use(express.static(__dirname +'/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended' : 'true'}))
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());


// listen + start the app ============================================
app.listen('9090')
console.log('listening port 9090')

// define model ======================================================
