import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from 'prisma/prisma.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [CatsModule, PrismaModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
