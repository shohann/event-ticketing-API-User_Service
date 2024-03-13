import { DataSource } from 'typeorm';
import { IDatabaseLoader } from '../../interfaces/loaders/IDatabaseLoader';

export default class DatabaseLoader implements IDatabaseLoader {
    async connectDB(dataSource: DataSource): Promise<void> {
        await dataSource.initialize();
        console.log("Database connected");
    }
};

// TODO: Use DI here