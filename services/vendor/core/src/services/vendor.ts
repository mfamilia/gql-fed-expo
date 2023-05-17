import { Injectable } from '@nestjs/common';
import { Vendor } from 'src/models/vendor';

const vendors = {
  1: {
    id: 1,
    firstName: 'Michael',
    lastName: 'Cools',
    name: 'mcools'
  },
  2: {
    id: 2,
    firstName: 'Karla',
    lastName: 'Tombs',
    name: 'ktombs'
  },
  3: {
    id: 3,
    firstName: 'Liza',
    lastName: 'Does',
    name: 'ldoes',
  },
  4: {
    id: 4,
    firstName: 'Bob',
    lastName: 'Links',
    name: 'blinks'
  }
}

@Injectable()
export class VendorService {
  async findOneById(id: number): Promise<Vendor> {
    return vendors[id];
  }
}
