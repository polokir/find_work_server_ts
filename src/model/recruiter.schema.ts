import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false, timestamps: true })
export class Recruiter extends Document {

    @Prop({ required: true })
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    company_name:string;

    @Prop({required:true})
    type_of_company:string;

    @Prop({required:true})
    avatarURL:string;
}

export const RecruiterSchema = SchemaFactory.createForClass(Recruiter);