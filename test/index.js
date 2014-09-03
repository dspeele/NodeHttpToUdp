var request = require('supertest');
var server = require('../server');
var router = require('../router');
var config = require('../config');
var serverPath = "http://localhost:" + config.http.port;
console.log(serverPath);
server.start(router.route);
describe('POST /sendUdpMessage', function(){
    it('respond with success', function(done){
        request(serverPath)
            .post('/sendUdpMessage')
	    .send('dana:1|c\\nmatt:2|ms')
            .expect(200, 'Message Received: /sendUdpMessage')
            .end(function(err, res){
                if (err) throw err;
            });
        done();
    });
});
