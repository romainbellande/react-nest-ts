import { Model } from 'mongoose';
import { Component, Inject, Body, Param } from '@nestjs/common';

import { User, UserEndpoint } from '../../../../common/entities';

@Component()
export class UserService {
  constructor(@Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const userInstance = new this.userModel(user);
    return await userInstance.save();
  }

  async findById(userId: string): Promise<User> {
    return await this.userModel.findById(userId, 'username email').exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
