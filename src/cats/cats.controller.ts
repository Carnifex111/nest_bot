import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from '@prisma/client';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async createCat(
    @Body() data: { name: string; age: number; breed: string },
  ): Promise<Cat> {
    return this.catsService.createCat(data);
  }

  @Get()
  async getCats(): Promise<Cat[]> {
    return this.catsService.getCats();
  }
}
