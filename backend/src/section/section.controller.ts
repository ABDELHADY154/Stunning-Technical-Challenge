// src/section/section.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  async create(@Body('idea') idea: string) {
    return this.sectionService.generateSections(idea);
  }

  @Get()
  async findAll() {
    return this.sectionService.getAll();
  }
}
