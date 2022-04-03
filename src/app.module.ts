import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './modules/users/users.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';

import configurate from './shared/config/configurate';
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configurate] }),
    MongooseModule.forRoot(
      `mongodb://${configurate().database.user}:${
        configurate().database.user
      }@transactions-dev-db:${configurate().database.port}/`,
      {
        dbName: configurate().database.name,
      },
    ),
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
