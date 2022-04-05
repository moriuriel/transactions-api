import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configurate from './shared/config/configurate';
import { DatabaseModule } from './shared/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configurate] }),
    DatabaseModule,
    UsersModule,
    AuthenticationModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
