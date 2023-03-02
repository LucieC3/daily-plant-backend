import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Plant } from 'models/plant.model';

@InputType()
export class PlantCreateInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;
}

@ObjectType()
export class PlantCreateOutput {
  @Field(() => Plant)
  plant: Plant;
}
