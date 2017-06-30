var http = require('http');
var dateTimeModule = require('./custom-modules/dateTimeModule.js');
var fileSystemModule = require('fs');
var urlModule = require('url');

http.createServer(function (request, response) {
    var query = urlModule.parse(request.url, true);
    var fileName = "./views/" + query.path;
    fileSystemModule.readFile(fileName, function (error, data) {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
        }

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        response.end();
    })

}).listen(8080);