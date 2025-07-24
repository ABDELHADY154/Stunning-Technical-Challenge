// src/section/section.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Section } from './section.schema';
import { Model } from 'mongoose';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<Section>,
  ) {}

  async generateSections(idea: string): Promise<Section> {
    const dummySections = ['Hero', 'About', 'Contact'];
    const section = new this.sectionModel({ idea, sections: dummySections });
    return section.save();
  }

  async getAll(): Promise<Section[]> {
    return this.sectionModel.find().exec();
  }
}
