import { Document } from 'mongoose';

export interface Entity extends Document {
  readonly _id: string;
  readonly __v: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
