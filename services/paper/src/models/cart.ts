import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CartItem } from './cartItem';


@ObjectType()
export class Cart {
  @Field(() => Int)
  id: number;

  @Field(() => [CartItem])
  items: CartItem[]
}

