import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// src/main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow frontend access
  await app.listen(3001);
}

bootstrap();
