import { Interceptor, NestInterceptor, ExecutionContext } from '@nestjs/common';
import chalk from 'chalk';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Interceptor()
export class LoggingInterceptor implements NestInterceptor {
  intercept(req, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    const gid = this.gid();
    console.info(`${ this.balise(req.method) + this.balise('START') } ${ chalk.cyan(req.originalUrl) } ${ gid }`);
    const now = Date.now();

    return stream$.do(
      () => console.info(`${ this.balise(req.method) + this.balise('END') } ${ chalk.cyan(req.originalUrl) } ${ gid } ${chalk.green((Date.now() - now).toString() + 'ms')}`),
    );
  }

  balise(val): string {
    return chalk.green('[') + chalk.blue(val) + chalk.green(']');
  }

  gid(): string {
    let gid = '';
    for (let i = 0; i < 8; i++) {
      gid += this.s4();
    }
    return gid;
  }

  s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
