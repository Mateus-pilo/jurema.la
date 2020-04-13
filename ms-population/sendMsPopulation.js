const amqp = require('amqplib/callback_api');

const populations = require('./population.json');

let ch = undefined;

amqp.connect('amqp://rabbit:5672',function (err, conn) { 
  conn.createChannel( (err, channel) => {
    ch = channel;
    console.log('rabbitmq On');
    ch.assertQueue('population', { durable: false });
    ch.sendToQueue('population', Buffer.from(JSON.stringify(populations)));
  });
});

const publishToQueue = async (queue, data) => {
  ch.sendToQueue(queue, new Buffer(data));
}

module.exports = publishToQueue;