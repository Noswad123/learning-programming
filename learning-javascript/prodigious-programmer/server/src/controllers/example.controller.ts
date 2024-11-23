import { Controller, Get } from '@nestjs/common';
import { ExampleService } from '../services/example.service';
import { Example } from '../entities/example.entity';

@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  findAll(): Promise<Example[]> {
    return this.exampleService.findAll();
  }

  // Additional endpoints as needed
}