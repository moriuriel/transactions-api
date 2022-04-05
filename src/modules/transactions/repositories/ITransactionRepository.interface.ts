import { ITransaction } from '../interfaces/shared.interface';
import { Transaction } from '../schemas/Transaction.schema';

export interface ITransactionRepository {
  create(transaction: ITransaction): Promise<Transaction>;
}
