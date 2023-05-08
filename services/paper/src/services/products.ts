import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product';

const products: Product[] = [
  {
    id: 1,
    name: 'Wedding Invitation',
    price: 2.99
  },
  {
    id: 2,
    name: 'Guestbook',
    price: 29.99
  },
  {
    id: 3,
    name: 'Menu',
    price: 1.99
  }
];

@Injectable()
export class ProductsService {
  async findOneById(id: number): Promise<Product> {
    return products.find(x => x.id == id);
  }

  async allProducts(): Promise<Product[]> {
    return products
  }
}
