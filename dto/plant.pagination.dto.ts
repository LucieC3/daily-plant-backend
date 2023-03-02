import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { Plant } from 'models/plant.model';
import {
  Pagination,
  PaginationArgs,
  PaginationSortBy,
  SortDirection,
} from 'pagination/dto/pagination.dto';

@InputType()
export class PlantsPaginationSortBy extends PaginationSortBy {
  @Field(() => SortDirection, { nullable: true })
  title?: SortDirection;
}

@ArgsType()
export class PlantsPaginationArgs extends PaginationArgs {
  @Field(() => PlantsPaginationSortBy, { nullable: true })
  sortBy?: PlantsPaginationSortBy;
}

@ObjectType()
export class PlantsPagination extends Pagination {
  @Field(() => [Plant])
  nodes: Plant[];
}
