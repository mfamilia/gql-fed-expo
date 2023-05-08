import { UseGuards } from "@nestjs/common";
import { Args, Float, Int, Parent, Query, ResolveField, ResolveProperty, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "src/guards/auth";
import { Cart } from "src/models/cart";
import { CartsService } from "src/services/carts";

@Resolver(() => Cart)
export class CartsResolver {
  constructor(
    private cartsService: CartsService,
  ) { }

  @UseGuards(AuthGuard)
  @Query(() => Cart)
  async cart(@Args('id', { type: () => Int }) id: number) {
    return this.cartsService.findOneById(id);
  }

  @ResolveField(() => Int)
  async totalCount(@Parent() cart: Cart): Promise<number> {
    return cart.items.reduce<number>((acc, item) => {
      acc += item.count;

      return acc
    }, 0);
  }

  // @ResolveField(() => Float)
  // async totalPrice(@Parent() cart: Cart): Promise<number> {
  //   return cart.items.reduce<number>((acc, item) => {
  //     acc += item.product.price * item.count;
  //
  //     return acc
  //   }, 0);
  // }
}
