import { Module } from '@nestjs/common';
import { VendorResolver } from './resolvers/vendor';
import { TaskService } from './services/task';

@Module({
  providers: [
    TaskService,
    VendorResolver
  ],
})
export class VendorModule { }
