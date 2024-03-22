import { DataSource } from 'typeorm';
import { IDatabaseLoader } from '../../interfaces/loaders/IDatabaseLoader';

// How this is happening without injectable?

export default class DatabaseLoader implements IDatabaseLoader {
    async connectDB(dataSource: DataSource): Promise<void> {
        await dataSource.initialize();
        console.log("Database connected");
    }
};

// TODO: Use DI here