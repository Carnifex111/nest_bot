import { Injectable } from '@nestjs/common';
import { Cat } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { TelegramService } from 'src/telegram/telegram.service';

@Injectable()
export class CatsService {
  constructor(
    private prisma: PrismaService,
    private telegramService: TelegramService,
  ) {}

  async createCat(data: {
    name: string;
    age: number;
    breed: string;
  }): Promise<Cat> {
    await this.telegramService.sendMessage(
      `Добавлен новый кот: ${data.name}, возраст: ${data.age}, порода: ${data.breed}`,
    );
    return this.prisma.cat.create({ data });
  }

  async getCats(): Promise<Cat[]> {
    await this.telegramService.sendMessage(`Пользователь получил список котов`);
    return this.prisma.cat.findMany();
  }

  async deleteCat(id: number): Promise<void> {
    await this.prisma.cat.delete({ where: { id } });
    await this.telegramService.sendMessage(`Кот с id ${id} удалён.`);
  }

  async updateCat(
    id: number,
    data: { name?: string; age?: number; breed?: string },
  ): Promise<Cat> {
    const updatedCat = await this.prisma.cat.update({
      where: { id },
      data,
    });
    await this.telegramService.sendMessage(
      `Кот с id ${id} обновлён: ${JSON.stringify(data)}`,
    );
    return updatedCat;
  }
}
