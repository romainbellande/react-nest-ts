import { Entity } from '../../interfaces';

export interface User extends Entity {
  readonly username: string;
  readonly email: string;
  readonly password?: string;
}
