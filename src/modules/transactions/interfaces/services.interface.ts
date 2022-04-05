import { ITransaction } from './shared.interface';

export interface ICreateTransactionService {
  transaction: ITransaction;
  email: string;
}
