// load the express package and create our app
var bodyParser = require("body-parser");
var express    = require('express');
var app        = express();

console.log(process.argv.length + ' args');

if (process.argv.length < 2) {
    console.log(
        'Usage: \n' +
        'node server.js [<port>]'
    );
    process.exit();
}

// set the port based on environment (more on environments later)
var STREAM_PORT = process.argv[2] || 8080;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// This middleware works
//app.use(function (req, res, next) {
//    console.log('middleware');
//    return next();
//});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// start the server
app.listen(STREAM_PORT);

//console.log(port + ' is the magic port!');
console.log('Listening on port: ' + STREAM_PORT);
