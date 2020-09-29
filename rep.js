var servers = ['iot-msg:4222'];
var topic = 'trash-level';
var nats = require('nats').connect({'servers':servers});
nats.subscribe(topic, function(msg) {
    console.log('Received report: ' + msg);
});
