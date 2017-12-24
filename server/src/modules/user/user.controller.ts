import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';

import { AppConfig } from '../../../../common/config';
import { User, UserEndpoint } from '../../../../common/entities/user';
import { UserService } from './user.service';

const endpoint = UserEndpoint.get;

@Controller(endpoint)
export class UserController {
  constructor(private readonly userService: UserService) {
    console.info(endpoint);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get('me')
  async find(@Req() req): Promise<User> {
    return this.userService.findById(req.user.id);
  }
}
