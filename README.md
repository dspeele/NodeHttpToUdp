Simple Node Web Service for sending UDP protocol message via HTTP
==============

Purpose
--------------

This server is meant to run in conjunction with a UDP server. It's purpose is to receive HTTP requests on the specified port and send them via UDP to the UDP server at the specified host and port.

Setup
--------------
  
- Clone this repository
- Configure the listener port and the UDP host and port in the config.js file (NOTE- Demandware has a firewall which prevents outgoing HTTP requests to any port except 80. If you want to use another port then you need to make a request to Demandware support to open that port.)
- Start the server: nohup node index.js > httpToUdp.log &

Usage
------------

- Send messages to the server by passing the parameter "message" containing the message text
- Example: http://localhost:8888/sendUdpMessage?message=foo2:1.25|c
- You can send multiple messages to the node server by separating them with the newline character ("\n")
- Example: http://localhost:8888/sendUdpMessage?message=foo2:1.25|c\nbar4:5.5|c

Logging
-------------

The log will be available at httpToUdp.log
