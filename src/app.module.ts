import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://root:root@transactions-dev-db:27018/', {
      dbName: 'transactions',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
