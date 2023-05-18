import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'A task that assigned to a vendor' })
@Directive('@key(fields: "id")')
export class Task {
  @Field(() => Int, { description: 'The id of the task' })
  id: number;

  @Field(() => String, { description: 'The name of the task' })
  name: string;

  @Field(() => String, { description: 'The description of the task' })
  description: string;
}

