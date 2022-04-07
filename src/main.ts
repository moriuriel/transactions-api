import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configurate from './shared/config/configurate';
import { HttpExceptionFilter } from './shared/exeception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const applicationPort = configurate().port;

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(applicationPort, () =>
    console.log(`API is running ${applicationPort}`),
  );
}
bootstrap();
