var http = require('http');
var url = require('url');
var config = require('./config');

function start (route) {
    function onRequest (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Message Received: ' + request.url);
        response.end();
        var url_parts = url.parse(request.url, true)
        console.log('Url parts: %j ', url_parts);
        var message = url_parts.query.message;
        console.log('Message to send is ' + message + '.');
        var pathname = url_parts.pathname;
        console.log('Request for ' + pathname + '.');
        route(url_parts);
    }

    http.createServer(onRequest).listen(config.http.port);

    console.log ('Server has started.');
}

exports.start = start;
