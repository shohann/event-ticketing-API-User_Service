import { 
    DataSource
} from "typeorm";
import { User } from "./entities/User";
import { config } from "../config";

console.log(config);

export const dataSource = new DataSource({
    type: "postgres",
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    entities: [User],
    synchronize: true,
});


