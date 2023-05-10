import { Injectable } from '@nestjs/common';
import { Member } from './member.dto';

@Injectable()
export class AppService {
  getPayload(): Member {
    return {
      id: "6551abd2-cf86-4da1-9bec-06472729314e",
      firstName: "TheKnot",
      lastName: "WorldWide"
    };
  }
}
