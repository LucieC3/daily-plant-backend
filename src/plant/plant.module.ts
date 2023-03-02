import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from 'models/plant.model';
import { PlantMutationsResolver } from 'resolvers/plant.mutations.resolver';
import { PlantQueriesResolver } from 'resolvers/plant.queries.resolver';
import { PlantService } from './plant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  providers: [PlantService, PlantMutationsResolver, PlantQueriesResolver],
})
export class PlantModule {}
