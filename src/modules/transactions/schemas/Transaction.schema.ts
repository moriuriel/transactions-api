import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

enum TRANSACTION_TAG {
  'INCOME',
  'OUTCOME',
}

@Schema({ timestamps: true, autoCreate: true })
export class Transaction {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ enum: TRANSACTION_TAG, required: true })
  tag: string;

  @Prop({ default: false })
  isPaid: boolean;

  @Prop({ required: true })
  Owner: {
    _id: string;
  };
}

export type TransactionDocument = Transaction & Document;