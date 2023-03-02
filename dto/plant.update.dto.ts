import { InputType, ObjectType } from '@nestjs/graphql';
import { PlantCreateInput, PlantCreateOutput } from './plant.create.dto';

@InputType()
export class PlantUpdateInput extends PlantCreateInput {}

@ObjectType()
export class PlantUpdateOutput extends PlantCreateOutput {}
