var http = require('http');
var dateTimeModule = require('./custom-modules/dateTimeModule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently: " + dateTimeModule.myDateTime());
    res.end();
}).listen(8080);