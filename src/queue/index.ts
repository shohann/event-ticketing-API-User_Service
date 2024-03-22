import amqplib from 'amqplib';
import { IMessageBroker } from '../interfaces/loaders/IMessageBroker';
import { config } from '../config';

class MessageBroker implements IMessageBroker {
    private connection: amqplib.Connection | null = null;
    private channel: amqplib.Channel | null = null;

    // constructor() {} 

    public async createChannel(): Promise<void> {
        try {
            this.connection = await amqplib.connect(config.rabbitMqUrl);
            this.channel = await this.connection.createChannel();

            await this.channel.assertExchange(config.exchangeName, 'direct', { durable: true });
            await this.channel.assertQueue(config.exchangeName, { durable: true });
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

    // public async publishMessage(serviceName: string, message: any): Promise<void> {
    //     const q = await this.channel?.assertQueue("", { exclusive: true });
    //     this.channel?.publish(config.exchangeName, serviceName, Buffer.from(message));
    //     console.log("Sent: ", message);
    // }

    public async publishMessage(serviceName: string, message: any): Promise<void> {
        this.channel?.publish(config.exchangeName, serviceName, Buffer.from(message));
        console.log("Sent: ", message);
    }
};

export default MessageBroker;

// try {
//     if (!channel) {
//       channel = (await createConnection()) as Channel;
//     }
//     await channel.assertExchange(exchangeName, 'fanout');
//     channel.publish(exchangeName, '', Buffer.from(message));
//     log.info(logMessage);
//   } catch (error) {
//     log.log('error', 'ReviewService publishFanoutMessage() method:', error);
//   }