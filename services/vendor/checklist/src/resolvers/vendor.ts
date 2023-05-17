import { UseGuards } from "@nestjs/common";
import { Args, Query, Int, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "src/guards/auth";
import { Task } from "src/models/task";
import { Vendor } from "src/models/vendor";
import { TaskService } from "src/services/task";

@Resolver(() => Vendor)
export class VendorResolver {
  constructor(
    private service: TaskService,
  ) { }

  @ResolveField(() => [Task])
  async completedTasks(@Parent() vendor: Vendor): Promise<Task[]> {
    return this.service.findCompleted(vendor.id);
  }

  @UseGuards(AuthGuard)
  @ResolveField(() => [Task])
  async todoTasks(@Parent() vendor: Vendor): Promise<Task[]> {
    return this.service.findTodo(vendor.id);
  }
}
