var http = require('http');
var dateTimeModule = require('./custom_modules/dateTimeModule.js');
var fileSystemModule = require('fs');
var urlModule = require('url');
var upperCaseModule = require('upper-case');
var formidableModule = require('formidable');
var configurationFile = require('./config/development.json');

http.createServer(function (request, response) {
    var query = urlModule.parse(request.url, true);
    var fileName = "./views" + query.path;
    if (fileName.includes("fileupload")) {
        var form = new formidableModule.IncomingForm();
        form.parse(request, function (error, fields, files) {
            var oldPath = files.fileToUpload.path;
            var newPath = './resources/' + files.fileToUpload.name;
            fileSystemModule.rename(oldPath, newPath, function (error) {
                if (error) {
                    throw error;
                }
                response.write('File uploaded');
                response.end();
            })

        })
        return;
        
    }
    fileSystemModule.readFile(fileName, function (error, data) {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
        }



        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(upperCaseModule("The Server Run in { "+configurationFile.enviroment+" } Enviroment!!"));
        response.write(data);
        response.end();
    })

}).listen(8080);