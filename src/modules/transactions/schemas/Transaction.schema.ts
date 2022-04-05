import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Owner, TRANSACTION_TAG } from '../interfaces/shared.interface';

@Schema({ timestamps: true, autoCreate: true })
export class Transaction {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ enum: TRANSACTION_TAG, required: true })
  tag: string;

  @Prop({ default: false })
  is_pad: boolean;

  @Prop({ required: true, type: Object })
  owner: Owner;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

export type TransactionDocument = Transaction & Document;
