import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Concept } from '../entities/concept.entity';

@Injectable()
export class ConceptService {
  constructor(
    @InjectRepository(Concept)
    private readonly conceptRepository: Repository<Concept>,
  ) {}

  findAll(): Promise<Concept[]> {
    return this.conceptRepository.find();
  }

  // Additional methods for create, update, delete, etc.
}