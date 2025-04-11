import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptService } from '../services/concept.service';
import { ConceptController } from '../controllers/concept.controller';
import { Concept } from '../entities/concept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Concept])],
  controllers: [ConceptController],
  providers: [ConceptService],
  exports: [ConceptService]
})
export class ConceptModule {}