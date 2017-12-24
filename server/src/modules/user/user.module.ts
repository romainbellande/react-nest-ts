import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';

@Module({
  modules: [
    DatabaseModule,
  ],
  controllers: [UserController],
  components: [
    UserService,
    ...userProviders,
  ],
})
export class UserModule {}
