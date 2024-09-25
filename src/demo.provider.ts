import { DataSource } from 'typeorm';
import { Demo } from './demo.schema';

export const demoProviders = [
  {
    provide: 'DemoRepository',
    useFactory: async (dataSource: DataSource) => {
      return dataSource.getRepository(Demo);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
