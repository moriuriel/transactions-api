import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { TransactionsController } from './controllers/Transactions.controller';
import { TransactionRepository } from './repositories/Transaction.repository';
import { Transaction, TransactionSchema } from './schemas/Transaction.schema';
import { CreateTransactionsService, FindByOwnerIdService } from './services';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [
    CreateTransactionsService,
    TransactionRepository,
    FindByOwnerIdService,
  ],
})
export class TransactionsModule {}
