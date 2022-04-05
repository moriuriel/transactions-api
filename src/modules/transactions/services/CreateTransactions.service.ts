import { Inject, Injectable } from '@nestjs/common';
import { DATABASE_ERROR } from 'src/shared/exeception';
import { ITransaction } from '../interfaces/shared.interface';
import { ITransactionRepository } from '../repositories/ITransactionRepository.interface';
import { TransactionRepository } from '../repositories/Transaction.repository';
import { Transaction } from '../schemas/Transaction.schema';

@Injectable()
export class CreateTransactionsService {
  constructor(
    @Inject(TransactionRepository)
    private readonly transactionRepository: ITransactionRepository,
  ) {}

  async execute(transaction: ITransaction): Promise<Transaction> {
    try {
      const createdTransaction = await this.transactionRepository.create(
        transaction,
      );

      return createdTransaction;
    } catch (error) {
      throw new DATABASE_ERROR(error);
    }
  }
}
