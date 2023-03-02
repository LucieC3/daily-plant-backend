import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlantCreateInput, PlantCreateOutput } from 'dto/plant.create.dto';
import { PlantDeleteOutput } from 'dto/plant.delete.dto';
import {
  PlantsPagination,
  PlantsPaginationArgs,
} from 'dto/plant.pagination.dto';
import { PlantUpdateInput, PlantUpdateOutput } from 'dto/plant.update.dto';
import { Plant } from 'models/plant.model';
import { Repository } from 'typeorm';

@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantRepository: Repository<Plant>,
  ) {}

  async plantCreate(input: PlantCreateInput): Promise<PlantCreateOutput> {
    const newPlant = this.plantRepository.create(input);
    const plant = await this.plantRepository.save(newPlant);
    return { plant };
  }

  async plantUpdate(
    plantId: Plant['id'],
    input: PlantUpdateInput,
  ): Promise<PlantUpdateOutput> {
    const plant = await this.plantRepository.findOneBy({ id: plantId });
    plant.title = input.title;
    plant.description = input.description;
    plant.image = input.image;
    await plant.save();
    return { plant };
  }

  async plantDelete(plantId: Plant['id']): Promise<PlantDeleteOutput> {
    const plant = await this.plantRepository.findOneBy({ id: plantId });
    await plant.remove();
    return { plantId };
  }
  async plantsPagination(
    args: PlantsPaginationArgs,
  ): Promise<PlantsPagination> {
    const [nodes, totalCount] = await this.plantRepository.findAndCount({
      skip: args.skip,
      take: args.take,
    });
    return { nodes, totalCount };
  }
}
