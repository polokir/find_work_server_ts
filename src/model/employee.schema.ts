import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({ versionKey: false, timestamps: true })
export class Employee extends Document {

    @Prop({ required: true })
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({required:true})
    age:number;

    @Prop({required:true})
    experience:number;

    @Prop({default:null})
    avatarURL:string;

    @Prop([String])
    skills:string[]

    @Prop()
    salary_level:string;

    @Prop()
    city:string;

    @Prop({default:null})
    rezumeUrl:string
    
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);