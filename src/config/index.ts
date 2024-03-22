import dotenv from 'dotenv';
import IConfig from "../interfaces/config/IConfig";

dotenv.config();

export const config: IConfig = {
    salt: Number.parseInt(process.env.SALT || '10'),
    port: Number.parseInt(process.env.PORT || '8001', 10),
    jwtSecret: process.env.JWT_SECRET || '',
    jwtExpiresTime: process.env.JWT_EXPIRES_TIME || '15d',
    nodeEnv: process.env.NODE_ENV || 'development',
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: Number(process.env.DB_PORT) || 5432,
    dbUser: process.env.DB_USER || 'user',
    dbPassword: process.env.DB_PASSWORD || "userpassword", // solve this problem why we need to set a default value here
    dbName: process.env.DB_NAME || "userdb",
    rabbitMqUrl: process.env.RABBIT_MQ_URL || 'amqp://rabbitmq:5672',
    exchangeName: process.env.EXCHANGE_NAME || "EVENT_APP",
    eventService: 'event_service'
};

// validate env
// TODO: Fix the undefind for env ('')
// dbPort: Number.parseInt(process.env.DB_PORT || "5432", 10),

