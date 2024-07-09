import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Vacancy extends Document {
  @Prop({ type: String, required: [true, 'title is required'] })
  title: string;

  @Prop({ type: String, required: [true, 'text is required'] })
  text: string;

  @Prop({ type: String, required: [true, 'text is required'] })
  skills: string;

  @Prop({ type: Number, default: 0 })
  apply_count: number;

  @Prop({ type: String, default: null })
  test_task_link: string;

  @Prop({ type: Number })
  salary: number;

  @Prop({ type: Number })
  year_of_experience: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Recruiter' })
  recruiter: MongooseSchema.Types.ObjectId;

  @Prop({ type: String, default: null })
  location: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Employee' }] })
  employee: MongooseSchema.Types.ObjectId[];
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
