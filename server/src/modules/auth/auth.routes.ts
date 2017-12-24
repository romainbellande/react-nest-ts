import { RequestMethod } from '@nestjs/common';

import { UserEndpoint } from '../../../../common/entities';

export const authRoutes = [
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.GET },
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.PUT },
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.PATCH },
  { path: `/${ UserEndpoint.get }`, method: RequestMethod.DELETE },
  { path: `/${ UserEndpoint.get }/me`, method: RequestMethod.ALL },
];
