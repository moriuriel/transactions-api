import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../schemas/Transaction.schema';
import {
  ICreateTransaction,
  ITransactionRepository,
} from './ITransactionRepository.interface';

@Injectable()
export class TransactionRepository implements ITransactionRepository {
  constructor(
    @InjectModel(Transaction.name)
    private transactionRepository: Model<Transaction>,
  ) {}

  async create(transaction: ICreateTransaction): Promise<Transaction> {
    return this.transactionRepository.create(transaction);
  }

  async findByOnwerId(owner_id: string): Promise<Transaction[]> {
    return this.transactionRepository.find({ owner: { _id: owner_id } });
  }
}
