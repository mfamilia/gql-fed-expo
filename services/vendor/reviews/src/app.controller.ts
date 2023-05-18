import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Vendor } from './vendor.dto';

@ApiTags('vendor')
@Controller('vendor')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'The vendor with reviews',
    type: Vendor
  })
  @ApiParam({ name: 'id', type: 'integer', required: true })
  @ApiOperation({
    operationId: 'vendor'
  })
  getVendor(@Param() { id }): Vendor {
    return this.appService.getPayload(id);
  }
}
