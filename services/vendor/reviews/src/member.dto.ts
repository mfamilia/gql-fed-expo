import { ApiProperty } from "@nestjs/swagger";

export class Member {
  @ApiProperty({
    description: "Member's Id"
  })
  id: string;

  @ApiProperty({
    description: "Member's first name"
  })
  firstName: string;

  @ApiProperty({
    description: "Member's last name"
  })
  lastName: string;
}
