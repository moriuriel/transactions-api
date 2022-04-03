import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configurate from '../config/configurate';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${configurate().database.user}:${
          configurate().database.user
        }@transactions-dev-db:${configurate().database.port}`,
        dbName: configurate().database.name,
      }),
    }),
  ],
})
export class DatabaseModule {}
