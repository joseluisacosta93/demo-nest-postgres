//establish the connection with postgres with the help of typeorm
import { DataSource } from 'typeorm';
import { Demo } from './demo.entity';
import { demoProviders } from './demo.provider';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'demo',
        entities: [Demo],
        synchronize: true,
      });
      await dataSource.initialize();
      return dataSource;
    }
  },
];