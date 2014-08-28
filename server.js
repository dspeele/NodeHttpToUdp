var http = require('http');
var url = require('url');
var config = require('./config');

function start (route) {
    function onRequest (request, response) {
        var url_parts = url.parse(request.url)
        var message = '';
        var pathname = url_parts.pathname;
        request.on('data', function (data) {
            message += data;
        });
        request.on('end', function () {
	    route(pathname, message);    
        });
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Message Received: ' + request.url);
        response.end();
    }

    http.createServer(onRequest).listen(config.http.port);

    console.log ('Server has started.');
}

exports.start = start;
