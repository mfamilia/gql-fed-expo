import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthGuard } from './auth.gard';
import { Member } from './member.dto';

@ApiTags('members')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The member record',
    type: Member
  })
  @ApiOperation({
    operationId: 'member'
  })
  @UseGuards(AuthGuard)
  getPayload(): Member {
    return this.appService.getPayload();
  }
}
