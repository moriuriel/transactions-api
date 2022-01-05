import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exeception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const applicationPort = 8080;

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(applicationPort);
}
bootstrap();
