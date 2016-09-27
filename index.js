/*
*
* Simple REST API that reads a text file and serves it 
*
*/

var express    = require('express');    
var bodyParser = require('body-parser');
var fs         = require('fs');
var toJSON     = require('plain-text-data-to-json');

var dataFile = 'data.txt';
var port = process.env.PORT || 35696;

/* Synchronous read function */
var readData = function() {
  return toJSON(fs.readFileSync(dataFile, 'utf8'));
};


/* Express app */
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* Express router */
var router = express.Router();

router.get('/', function(req, res) {
    res.json(readData());   
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port + '...');


