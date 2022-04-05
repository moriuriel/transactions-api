import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { TransactionsController } from './controllers/Transactions.controller';
import { TransactionRepository } from './repositories/Transaction.repository';
import { Transaction, TransactionSchema } from './schemas/Transaction.schema';
import { CreateTransactionsService } from './services/CreateTransactions.service';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [CreateTransactionsService, TransactionRepository],
})
export class TransactionsModule {}
