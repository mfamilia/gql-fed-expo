import { Args, Int, ObjectType, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Product } from "src/models/product";
import { ProductsService } from "src/services/products";

@ObjectType()
export class PaperQuery { }

@Resolver()
export class PaperResolver {
  @Query(() => PaperQuery, { name: "paper" })
  paperQuery() {
    return new PaperQuery()
  }
}

@Resolver(() => PaperQuery)
export class PaperQueryResolver {
  constructor(
    private productsService: ProductsService,
  ) { }

  @ResolveField(() => Product)
  async product(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOneById(id);
  }

  @ResolveField(() => [Product])
  async products() {
    return this.productsService.allProducts();
  }
}

@Resolver()
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
  ) { }

  @Query(() => Product)
  async product(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOneById(id);
  }

  @Query(() => [Product])
  async products() {
    return this.productsService.allProducts();
  }
}
