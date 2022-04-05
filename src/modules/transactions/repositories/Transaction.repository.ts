import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITransaction } from '../interfaces/shared.interface';
import { Transaction } from '../schemas/Transaction.schema';
import { ITransactionRepository } from './ITransactionRepository.interface';

@Injectable()
export class TransactionRepository implements ITransactionRepository {
  constructor(
    @InjectModel(Transaction.name)
    private transactionRepository: Model<Transaction>,
  ) {}

  async create(transaction: ITransaction): Promise<Transaction> {
    return this.transactionRepository.create(transaction);
  }
}
