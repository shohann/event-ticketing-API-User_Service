import dotenv from 'dotenv';
import IConfig from "../interfaces/config/IConfig";

dotenv.config();

export const config: IConfig = {
    port: Number.parseInt(process.env.PORT || '8001', 10),
    jwtSecret: process.env.JWT_SECRET || '',
    nodeEnv: process.env.NODE_ENV || 'development',
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: Number(process.env.DB_PORT) || 5432,
    dbUser: process.env.DB_USER || 'user',
    dbPassword: process.env.DB_PASSWORD || "userpassword",
    dbName: process.env.DB_NAME || "userdb"
};

// TODO: Fix the undefind for env ('')
// dbPort: Number.parseInt(process.env.DB_PORT || "5432", 10),

