import MessageBroker from "./broker"
const messageBroker = new MessageBroker('amqp://rabbitmq:5672');

const createNewChannel = async () => {
    console.log('Called')
    await messageBroker.createChannel();
}

const getChannel = async () => {
    let eventChannel = await messageBroker.getChannel();
    return eventChannel;
};

export { getChannel, createNewChannel };

