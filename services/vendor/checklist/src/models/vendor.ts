import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Task } from './task';


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Vendor {
  @Field(() => Int)
  @Directive('@external')
  id: number;

  @Field(() => [Task], { description: 'The list of tasks that needs to be completed' })
  todoTasks: Task[]

  @Field(() => [Task], { description: 'The list of tasks that have been completed' })
  completedTasks: Task[]
}

