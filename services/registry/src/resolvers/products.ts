import { Args, Int, Query, Resolver, ObjectType, ResolveField } from "@nestjs/graphql";
import { Product } from "src/models/product";
import { ProductsService } from "src/services/products";

@ObjectType()
export class RegistryQuery { }

@Resolver()
export class RegistryResolver {
  @Query(() => RegistryQuery, { name: "registry" })
  registryQuery() {
    return new RegistryQuery()
  }
}

@Resolver(() => RegistryQuery)
export class RegistryQueryResolver {
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

@Resolver(() => Product)
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
