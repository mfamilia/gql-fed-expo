import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Vendor {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Directive('@deprecated(reason: "This field will be removed in the version use fullName instead")')
  @Field(() => String)
  name: string;
}

