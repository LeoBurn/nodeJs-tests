var http = require('http');
var dateTimeModule = require('./custom-modules/dateTimeModule.js');
var fileSystemModule = require('fs');

http.createServer(function (request, response) {
  fileSystemModule.readFile('./views/index.html',function(error,data){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data);
      response.end();
  })
}).listen(8080);