import amqplib from 'amqplib';

export interface IMessageBroker {
  createChannel(): Promise<void>;
  getChannel(): Promise<amqplib.Channel | null>;
  publishMessage(serviceName: string, message: any): Promise<void>;
};



