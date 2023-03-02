import { Args, Resolver, Query } from '@nestjs/graphql';
import { Plant } from '../models/plant.model';
import { PlantService } from 'src/plant/plant.service';
import {
  PlantsPagination,
  PlantsPaginationArgs,
} from 'dto/plant.pagination.dto';

@Resolver(Plant)
export class PlantQueriesResolver {
  constructor(private readonly plantService: PlantService) {}

  @Query(() => PlantsPagination)
  async plantsPagination(@Args() args: PlantsPaginationArgs) {
    return this.plantService.plantsPagination(args);
  }
}
