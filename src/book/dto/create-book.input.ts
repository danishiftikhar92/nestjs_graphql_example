import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  description: string;

  @Field()
  publishedDate: string;
}
