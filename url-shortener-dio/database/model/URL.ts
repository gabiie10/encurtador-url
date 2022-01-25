import { prop, Typegoose,ModelType,InstanceType } from '@hasezoey/typegoose';
import * as mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/typegoose');
export class URL extends Typegoose {
    @prop({ required: true})
    hash: string

    @prop({ required: true})
    originURL: string

    @prop({ required: true})
    shortURL: string
}

export const URLModel = new URL().getModelForClass(URL);