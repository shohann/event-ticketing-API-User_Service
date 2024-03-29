import { container } from "tsyringe";
import { Application } from "express";
import ExpressLoader from "./ExpressLoader";
import DatabaseLoader from "./DatabaseLoader";
import { DataSource } from "typeorm";
import { IMessageBroker } from "../../interfaces/loaders/IMessageBroker";

export const loadMessageBroker = async (): Promise<void> => {
    const messageBroker = container.resolve<IMessageBroker>('IMessageBroker');

    setTimeout(async () => {
        await messageBroker.createChannel();
    }, 8000); 
};

export const loadApplicationModules = (app: Application) : void => {
    container.resolve(ExpressLoader).LoadApp(app);
};

export const loadDatabase = async (dataSource: DataSource) : Promise<void> => {
    await container.resolve(DatabaseLoader).connectDB(dataSource);
};

// export const loadDatabase = (dataSource: DataSource) : void => {
//     container.resolve(DatabaseLoader).connectDB(dataSource); // How this is  calling async ?
// };

// TODO: Why I did not use injectable here? compare with services and project

