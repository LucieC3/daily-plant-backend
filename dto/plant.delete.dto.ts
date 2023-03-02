import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Plant } from 'models/plant.model';

@ObjectType()
export class PlantDeleteOutput {
  @Field(() => ID)
  plantId: Plant['id'];
}
