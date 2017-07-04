var express = require('express');
var path = require('path');
var app = express();

// Serve up static files
app.use(express.static(__dirname + '/web'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/web/index.html'));
});

// Start Server
app.listen(4205, function() {
	console.log('Server: Running on port: 4205');
});