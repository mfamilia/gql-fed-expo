import { Module } from '@nestjs/common';
import { CartsResolver } from './resolvers/carts';
import { RegistryResolver, RegistryQueryResolver, ProductsResolver } from './resolvers/products';
import { CartsService } from './services/carts';
import { ProductsService } from './services/products';

@Module({
  providers: [
    CartsService,
    ProductsService,
    CartsResolver,
    RegistryResolver,
    RegistryQueryResolver,
    ProductsResolver,
  ],
})
export class StoreModule { }
