import { Injectable } from '@nestjs/common';
import { Cart } from 'src/models/cart';
import { ProductsService } from './products';

@Injectable()
export class CartsService {
  constructor(
    private productsService: ProductsService,
  ) { }

  async findOneById(_id): Promise<Cart> {
    const products = await this.productsService.allProducts();

    return {
      id: 1,
      items: [
        {
          id: 1,
          product: products[2],
          count: 12
        },
        {
          id: 2,
          product: products[1],
          count: 1
        },
        {
          id: 3,
          product: products[0],
          count: 1
        }
      ]
    };
  }
}
