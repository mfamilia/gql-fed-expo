import { ApiProperty } from "@nestjs/swagger";

export class Review {
  @ApiProperty({
    description: "Review's Id",
    type: "integer"
  })
  id: number;

  @ApiProperty({
    description: "Review's text"
  })
  text: string;

  @ApiProperty({
    description: "Review's rating",
  })
  rating: number;
}
