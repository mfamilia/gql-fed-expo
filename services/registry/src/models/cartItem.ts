import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from './product';

@ObjectType()
export class CartItem {
  @Field(() => Int)
  id: number;

  @Field(() => Product)
  product: Product;

  @Field(() => Int)
  count: number;
}

