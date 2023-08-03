import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetBook {
  @Field({ nullable: true })
  _id?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  author?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  publishedDate?: string;
}
