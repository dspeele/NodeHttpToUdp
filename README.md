Simple Node Web Service for sending UDP protocol message via HTTP
==============

Purpose
--------------

This server is meant to run in conjunction with a UDP server. It's purpose is to receive HTTP requests on the specified port and send them via UDP to the UDP server at the specified host and port.

Setup
--------------
  
-Clone this repository
-Configure the listener port and the UDP host and port in the config.js file
-Start the server: nohup node index.js > httpToUdp.log &

Logging
-------------
The log will be available at httpToUdp.log
