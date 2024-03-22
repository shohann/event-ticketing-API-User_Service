export default interface IConfig {
    salt: number,
    port: number;
    jwtSecret: string,
    jwtExpiresTime: string,
    nodeEnv: string,
    dbHost: string,
    dbPort: number,
    dbUser: string,
    dbPassword: string,
    dbName: string,
    rabbitMqUrl: string,
    exchangeName: string,
    eventService: string
};
  