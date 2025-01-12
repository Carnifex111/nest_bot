import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf;
  private readonly chatId = '-чат id';

  constructor() {
    this.bot = new Telegraf('токен');
  }

  async onModuleInit() {
    try {
      console.log('Telegram бот готов к работе');
    } catch (error) {
      console.error('Ошибка при инициализации Telegram бота:', error);
    }
  }

  async sendMessage(message: string): Promise<void> {
    try {
      await this.bot.telegram.sendMessage(this.chatId, message);
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
    }
  }
}
