import "reflect-metadata";
import { createServer } from "http";
import { config } from "./config";
import createApp from './app';
import { loadDatabase } from './api/loaders'
import { dataSource } from "./database";

const app = createApp();
const port = config.port;
const httpServer = createServer(app);

const main = async () => {
  try {
    await loadDatabase(dataSource); // await dataSource.initialize();
    
    httpServer.listen(port, async () => {
     console.log('User service is Listening to Port 8001');
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

main();


