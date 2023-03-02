import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { PlantCreateInput, PlantCreateOutput } from 'dto/plant.create.dto';
import { PlantDeleteOutput } from 'dto/plant.delete.dto';
import { PlantUpdateInput, PlantUpdateOutput } from 'dto/plant.update.dto';
import { Plant } from 'models/plant.model';
import { PlantService } from 'src/plant/plant.service';

@Resolver(Plant)
export class PlantMutationsResolver {
  constructor(private readonly plantService: PlantService) {}

  @Mutation(() => PlantCreateOutput)
  async plantCreate(@Args('input') input: PlantCreateInput) {
    return this.plantService.plantCreate(input);
  }

  @Mutation(() => PlantUpdateOutput)
  async plantUpdate(
    @Args({ name: 'plantId', type: () => ID }) plantId: Plant['id'],
    @Args('input') input: PlantUpdateInput,
  ) {
    return this.plantService.plantUpdate(plantId, input);
  }

  @Mutation(() => PlantDeleteOutput)
  async plantDelete(
    @Args({ name: 'plantId', type: () => ID }) plantId: Plant['id'],
  ) {
    return this.plantService.plantDelete(plantId);
  }
}
