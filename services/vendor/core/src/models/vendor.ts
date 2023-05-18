import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Unified vendor type' })
@Directive('@key(fields: "id")')
export class Vendor {
  @Field(() => Int, { description: 'Id used to access all things related to this vendor' })
  id: number;

  @Field(() => String, { description: 'The first name of the vendor' })
  firstName: string;

  @Field(() => String, { description: 'The last name of the vendor' })
  lastName: string;

  @Field(() => String, { deprecationReason: 'Use fullName instead' })
  name: string;
}

