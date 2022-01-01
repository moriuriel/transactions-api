import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  user_name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ minlength: 6, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
