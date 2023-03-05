import { UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { PlantCreateInput, PlantCreateOutput } from 'dto/plant.create.dto';
import { PlantDeleteOutput } from 'dto/plant.delete.dto';
import { PlantUpdateInput, PlantUpdateOutput } from 'dto/plant.update.dto';
import { Plant } from 'models/plant.model';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { PlantService } from 'src/plant/plant.service';

@Resolver(Plant)
export class PlantMutationsResolver {
  constructor(private readonly plantService: PlantService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PlantCreateOutput)
  async plantCreate(@Args('input') input: PlantCreateInput) {
    return this.plantService.plantCreate(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PlantUpdateOutput)
  async plantUpdate(
    @Args({ name: 'plantId', type: () => ID }) plantId: Plant['id'],
    @Args('input') input: PlantUpdateInput,
  ) {
    return this.plantService.plantUpdate(plantId, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => PlantDeleteOutput)
  async plantDelete(
    @Args({ name: 'plantId', type: () => ID }) plantId: Plant['id'],
  ) {
    return this.plantService.plantDelete(plantId);
  }
}
