import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { TelegramModule } from 'src/telegram/telegram.module';

@Module({
  imports: [PrismaModule, TelegramModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
