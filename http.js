var http = require('http');
var dateTimeModule = require('./custom-modules/dateTimeModule.js');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(request.url);
    response.write(" The date and time are currently: " + dateTimeModule.myDateTime());
    response.end();
}).listen(8080);