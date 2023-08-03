import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

interface BookInterface {
  _id: string;
  title: string;
  author: string;
  description: string;
  publishedDate: string;
}

export type BookDocument = HydratedDocument<Book>;

@ObjectType()
@Schema()
export class Book implements BookInterface {
  @Field()
  _id: string;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  author: string;

  @Field()
  @Prop()
  description: string;

  @Field()
  @Prop()
  publishedDate: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.plugin(mongoosePaginate);
