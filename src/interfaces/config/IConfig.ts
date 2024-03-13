export default interface IConfig {
    port: number;
    jwtSecret: string,
    nodeEnv: string,
    dbHost: string,
    dbPort: number,
    dbUser: string,
    dbPassword: string,
    dbName: string
};
  