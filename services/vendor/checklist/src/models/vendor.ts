import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Task } from './task';


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Vendor {
  @Field(() => Int)
  @Directive('@external')
  id: number;

  @Field(() => [Task])
  todoTasks: Task[]

  @Field(() => [Task])
  completedTasks: Task[]
}

