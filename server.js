// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
var morgan= require('morgan');
const bodyParser = require('body-parser');
var mongoose= require('mongoose');
// Get our API routes
const api = require('./server/routes/api');

mongoose.connect('mongodb://localhost:27017/DB_EVA'); 
const app = express();

// Parsers for POST data
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
//app.use('/api', api);
require('./app/routes.js')(app);

// Catch all other routes and return the index file


/**
 * Get port from environment and store in Express.
 */
let port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));