import * as mongoose from 'mongoose';
import chalk from 'chalk';

import { AppConfig } from '../../../../common/config';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      let db;
      try {
        db =  await mongoose.connect(AppConfig.MONGO_URL, {
          useMongoClient: true,
        });
      } catch (error) {
        console.error('Connection error: ' + chalk.red(error));
      }
      console.info(
        chalk.cyan('Database') +
        chalk.green(' [') +
        chalk.blue(`${ AppConfig.MONGO_DB_NAME }`) +
        chalk.green('] connected on port'),
        chalk.green('[') +
        chalk.blue(AppConfig.MONGO_PORT.toString()) +
        chalk.green('] ') +
        AppConfig.MONGO_URL,
      );

      return await db;
    },
  },
];
