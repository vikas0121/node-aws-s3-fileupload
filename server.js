const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const server = express();

// Ensure that S3 Bucket is properly loaded
console.log('S3 BUCKET', 'x');

// Middleware Plugins
server.use(bodyParser.json());
server.use(express.static('public'));
// Routes
server.use('/', [
  require('./routes/fileupload')
]);


// Start the server
server.listen(7000, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7000');
});