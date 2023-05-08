import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field(() => Float)
  price: number;
}

