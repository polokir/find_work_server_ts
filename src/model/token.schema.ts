import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


@Schema({ timestamps: true })
export class Token extends Document {
  @Prop({ type: String, required: true })
  refreshToken: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, refPath: 'userModel' })
  user: MongooseSchema.Types.ObjectId;

  @Prop({ type: String, required: true, enum: ['recruiter', 'employee'] })
  userModel: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
