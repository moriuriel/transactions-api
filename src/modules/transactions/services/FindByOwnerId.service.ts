import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IUserRepository } from 'src/modules/users/repositories/IUserRepository.interface';
import { UserRepository } from 'src/modules/users/repositories/User.repository';
import { ITransactionRepository } from '../repositories/ITransactionRepository.interface';
import { TransactionRepository } from '../repositories/Transaction.repository';
import { Transaction } from '../schemas/Transaction.schema';

@Injectable()
export class FindByOwnerIdService {
  constructor(
    @Inject(TransactionRepository)
    private transactionRepository: ITransactionRepository,

    @Inject(UserRepository)
    private userRepository: IUserRepository,
  ) {}

  async execute(email: string): Promise<Transaction[]> {
    console.log(email);
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new UnauthorizedException();

    const transactions = await this.transactionRepository.findByOwnerId(
      user._id,
    );

    return transactions;
  }
}
