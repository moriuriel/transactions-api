import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configurate from '../config/configurate';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${configurate().database.user}:${
          configurate().database.user
        }@localhost:${configurate().database.port}/${
          configurate().database.name
        }`,
      }),
    }),
  ],
})
export class DatabaseModule {}
