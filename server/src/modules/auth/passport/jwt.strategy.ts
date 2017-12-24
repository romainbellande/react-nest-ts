import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Component, Inject } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Component()
export class JwtStrategy extends Strategy {
  constructor(private readonly authService: AuthService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: 'Iet4weedEif0juer',
      },
      async (req, payload, next) => await this.verify(req, payload, next),
    );
    passport.use(this);
  }

  public async verify(req, payload, done) {
    try {
      const isValid = await this.authService.validateUser(payload);
      if (!isValid) {
        done('Unauthorized', false);
      } else {
        console.info('User connected: ' + payload.id);
        done(null, payload);
      }
    } catch (error) {
      console.error('error', error);
    }
  }
}
