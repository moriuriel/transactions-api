import { Owner, TRANSACTION_TAG } from '../interfaces/shared.interface';
import { Transaction } from '../schemas/Transaction.schema';

export interface ITransactionRepository {
  create(transaction: ICreateTransaction): Promise<Transaction>;
  findByOnwerId(owner_id: string): Promise<Transaction[]>;
}

export interface ICreateTransaction {
  title: string;
  tag: TRANSACTION_TAG;
  is_pad: boolean;
  owner: Owner;
}
