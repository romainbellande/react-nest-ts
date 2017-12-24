import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import chalk from 'chalk';

import { AppConfig } from '../../common/config';
import { ApplicationModule } from './modules/app.module';

import { LoggingInterceptor } from './interceptors';
import { HttpExceptionFilter } from './filters';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  app.setGlobalPrefix(AppConfig.API_URL);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err,
    });
  });

  await app.listen(AppConfig.PORT)
    .then(() => {
      console.info(
        chalk.cyan('App') +
        chalk.green(' [') +
        chalk.blue(`${ AppConfig.APP_NAME }`) +
        chalk.green('] started on port'),
        chalk.green('[') +
        chalk.blue(AppConfig.PORT.toString()) +
        chalk.green('] ') +
        `http://localhost:${ AppConfig.PORT }`,
      );
    })
    .catch(console.error);
}
bootstrap();
