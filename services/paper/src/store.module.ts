import { Module } from '@nestjs/common';
import { CartsResolver } from './resolvers/carts';
import { PaperResolver, PaperQueryResolver, ProductsResolver } from './resolvers/products';
import { CartsService } from './services/carts';
import { ProductsService } from './services/products';

@Module({
  providers: [
    CartsService,
    ProductsService,
    CartsResolver,
    PaperResolver,
    PaperQueryResolver,
    ProductsResolver,
  ],
})
export class StoreModule { }
