import { Document } from 'mongoose';
export interface CatInterface extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
