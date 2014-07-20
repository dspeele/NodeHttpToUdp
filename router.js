var dgram = require('dgram');
var config = require('./config');
var server = config.udp.servername;
var port = config.udp.port;

function route(url_parts) {
    switch(url_parts.pathname) {
        case '/sendUdpMessage':
            sendUdpMessage(url_parts.query.message);
            break;       
    }
}

function sendUdpMessage(message) {
    var messageBuffer = new Buffer(message);
    var client = dgram.createSocket('udp4');
    console.log('Sending ' + message + ' to ' + server + ':' + port);
    client.send(messageBuffer, 0, messageBuffer.length, port, server, function (err, bytes) {
        if (err) {
            console.log('Error: ' + err);
        } 
        client.close();
    });
}

exports.route = route;
