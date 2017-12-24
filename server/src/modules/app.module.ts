import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  modules: [
    UserModule,
    AuthModule,
  ],
})
export class ApplicationModule {}
