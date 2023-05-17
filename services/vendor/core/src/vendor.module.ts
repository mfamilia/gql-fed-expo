import { Module } from '@nestjs/common';
import { VendorResolver } from './resolvers/vendor';
import { VendorService } from './services/vendor';

@Module({
  providers: [
    VendorService,
    VendorResolver,
  ],
})
export class VendorModule { }
