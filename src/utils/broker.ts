import amqplib from 'amqplib';

// const MSG_QUEUE_URL = 'amqp://rabbitmq:5672'; // Dependency injection
const EXCHANGE_NAME = 'EVENT_APP';

class MessageBroker {
    private connection: amqplib.Connection | null = null;
    private channel: amqplib.Channel | null = null;

    constructor(private readonly url: string) {}

    public async createChannel(): Promise<void> {
        try {
            this.connection = await amqplib.connect(this.url);
            this.channel = await this.connection.createChannel();

            await this.channel.assertExchange(EXCHANGE_NAME, 'direct', { durable: true });
            await this.channel.assertQueue(EXCHANGE_NAME, { durable: true });
        } catch (err) {
            throw err;
        }
    }
    
    public async getChannel(): Promise<amqplib.Channel | null> {
        try {
            return this.channel;
        } catch (err) {
            throw err;
        }
    }
};

export default MessageBroker;

// import amqplib from 'amqplib';

// const MSG_QUEUE_URL='amqp://rabbitmq:5672'
// const USER_SERVICE = "user_service";
// const EVENT_SERVICE = "event_service";
// const EXCHANGE_NAME ='EVENT_APP';


// export const createChannel = async () => {
//     try {
//       const connection = await amqplib.connect(MSG_QUEUE_URL);
//       const channel = await connection.createChannel();
//       await channel.assertExchange(EXCHANGE_NAME, 'direct', { durable: true }); // Not in the old library
//       await channel.assertQueue(EXCHANGE_NAME, {
//         durable: true,
        
//       }, );

//       return channel;
//     } catch (err) {
//       throw err;
//     }
// };

// (async () => {
//   const queue = 'tasks';
//   const conn = await amqplib.connect('amqp://localhost');

//   const ch1 = await conn.createChannel();
//   await ch1.assertQueue(queue);

//   // Listener
//   ch1.consume(queue, (msg) => {
//     if (msg !== null) {
//       console.log('Recieved:', msg.content.toString());
//       ch1.ack(msg);
//     } else {
//       console.log('Consumer cancelled by server');
//     }
//   });

//   // Sender
//   const ch2 = await conn.createChannel();

//   setInterval(() => {
//     ch2.sendToQueue(queue, Buffer.from('something to do'));
//   }, 1000);
// })();