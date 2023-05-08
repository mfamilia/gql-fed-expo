import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product';

const products: Product[] = [
  {
    id: 1,
    name: 'Toaster',
    price: 29.99
  },
  {
    id: 2,
    name: 'Stand Mixer',
    price: 129.99
  },
  {
    id: 3,
    name: 'Towels',
    price: 11.99
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
