import { UseGuards } from "@nestjs/common";
import { Args, Int, Parent, Query, ResolveField, Resolver, ResolveReference } from "@nestjs/graphql";
import { AuthGuard } from "src/guards/auth";
import { Vendor } from "src/models/vendor";
import { VendorService } from "src/services/vendor";


@Resolver(() => Vendor)
export class VendorResolver {
  constructor(
    private service: VendorService,
  ) { }

  @UseGuards(AuthGuard)
  @Query(() => Vendor, { description: 'Get unified vendor' })
  async getVendor(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOneById(id);
  }

  @ResolveField(() => String, { description: 'The first and last name of the vendor' })
  async fullName(@Parent() v: Vendor): Promise<string> {
    return `${v.firstName} ${v.lastName}`;
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }): Promise<Vendor> {
    return this.service.findOneById(reference.id);
  }
}
