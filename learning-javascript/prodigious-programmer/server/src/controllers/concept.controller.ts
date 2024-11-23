import { Controller, Get } from '@nestjs/common';
import { ConceptService } from '../services/concept.service';
import { Concept } from '../entities/concept.entity';

@Controller('concepts')
export class ConceptController {
  constructor(private readonly conceptService: ConceptService) {}

  @Get()
  findAll(): Promise<Concept[]> {
    return this.conceptService.findAll();
  }

  // Additional endpoints as needed
}