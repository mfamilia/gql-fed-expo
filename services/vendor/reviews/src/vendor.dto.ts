import { ApiProperty } from "@nestjs/swagger";
import { Review } from './review.dto';

export class Vendor {
  @ApiProperty({
    description: "Vendor's Id",
    type: "integer"
  })
  id: number;

  @ApiProperty({
    description: "Vendor's reviews",
    type: [Review]
  })
  reviews: Review[];

  @ApiProperty({
    description: "Vendor's total rating",
  })
  totalRating: number;
}
