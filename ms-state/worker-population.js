const amqp = require('amqplib/callback_api');
const fs = require('fs');

let ch = undefined;
let connection = undefined;

module.exports = () => {
  
  const connect = async() => {

    amqp.connect('amqp://rabbit:5672', (err, conn) => {

      connection = conn;

      console.log('Connect on RabbitMq');

      connection.createChannel((err, channel) => {
        console.log('channel created');
        ch = channel;
        ch.assertQueue('population', { durable: false });

        ch.consume('population', async (data) => {
          await fs.writeFileSync('population.json', data.content, {
            mode: 0o755
          });
        }, { noAck: true });
      
      });
    });
  };
  
  return {
    connect,
    ch,
    connection
  }

}