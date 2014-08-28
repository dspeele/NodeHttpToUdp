var dgram = require('dgram');
var config = require('./config');
var server = config.udp.servername;
var port = config.udp.port;

function route(pathname, message) {
    switch(pathname) {
        case '/sendUdpMessage':
            sendUdpMessage(message);
            break;       
    }
}

function sendUdpMessage(message) {
    if (message != null) {
        var messageBuffer = null;
        var client = dgram.createSocket('udp4');
        var messages = message.split("\\n");
        for (var index = 0; index < messages.length; index++) {
	    if (messages[index].length > 0) {
                console.log('Sending ' + messages[index] + ' to ' + server + ':' + port);
                messageBuffer = new Buffer(messages[index]);
                client.send(messageBuffer, 0, messageBuffer.length, port, server, function (err, bytes) {
                    if (err) {
                        console.log('Error: ' + err);
                    } 
                });
	    }
        }
        client.close();
    }
}

exports.route = route;
