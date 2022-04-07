import { ITransaction } from '../interfaces/shared.interface';
import { Transaction } from '../schemas/Transaction.schema';
import { ITransactionRepository } from './ITransactionRepository.interface';

export class FakeTransactionRepository implements ITransactionRepository {
  private transactions: Transaction[] = [];

  async create(transaction: ITransaction): Promise<Transaction> {
    const newTransaction = new Transaction();

    Object.assign(newTransaction, { ...transaction });

    this.transactions.push(newTransaction);

    return newTransaction;
  }

  async findByOwnerId(owner_id: string): Promise<Transaction[]> {
    return this.transactions.filter(
      (transaction) => transaction.owner._id === owner_id,
    );
  }
}
