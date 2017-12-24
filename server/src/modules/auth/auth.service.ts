import { Model } from 'mongoose';
import { Component, Inject, Body, Param } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { User, UserEndpoint } from '../../../../common/entities/user';

@Component()
export class AuthService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>) {}

  async createToken(user: User) {
    return await this.userModel.findOne(user)
      .exec()
      .then((userDoc) => {
        const expiresIn = '360d', secretOrKey = 'Iet4weedEif0juer';
        const token = jwt.sign({id: userDoc.id}, secretOrKey, { expiresIn });
        return {
          expiresIn,
          token,
        };
      })
      .catch(console.error);
  }

  validateUser(userId: { id: string }): Promise<boolean> {
    return this.userModel.findOne(userId)
      .exec()
      .then(() => true)
      .catch(() => false);
  }
}
