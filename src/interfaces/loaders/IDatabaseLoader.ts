import { DataSource } from "typeorm";

export interface IDatabaseLoader {
    connectDB(dataSource: DataSource): Promise<void>;
};
  
  