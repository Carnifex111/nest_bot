import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
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

  @Delete(':id')
  async deleteCat(@Param('id') id: string): Promise<{ message: string }> {
    const catId = Number(id);
    if (isNaN(catId)) {
      throw new Error(`ID должен быть числом`);
    }
    await this.catsService.deleteCat(catId);
    return { message: `Кот с id ${id} успешно удалён.` };
  }

  @Put(':id')
  async updateCat(
    @Param('id') id: string,
    @Body() data: { name?: string; age?: number; breed?: string },
  ): Promise<Cat> {
    const catId = Number(id);
    if (isNaN(catId)) {
      throw new Error(`ID должен быть числом, получено: ${id}`);
    }
    return this.catsService.updateCat(catId, data);
  }
}
