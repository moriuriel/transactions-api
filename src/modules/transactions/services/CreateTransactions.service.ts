import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IUserRepository } from 'src/modules/users/repositories/IUserRepository.interface';
import { UserRepository } from 'src/modules/users/repositories/User.repository';
import { DATABASE_ERROR } from 'src/shared/exeception';
import { ICreateTransactionService } from '../interfaces';

import { ITransactionRepository } from '../repositories/ITransactionRepository.interface';
import { TransactionRepository } from '../repositories/Transaction.repository';
import { Transaction } from '../schemas/Transaction.schema';

@Injectable()
export class CreateTransactionsService {
  constructor(
    @Inject(TransactionRepository)
    private readonly transactionRepository: ITransactionRepository,

    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({
    email,
    transaction,
  }: ICreateTransactionService): Promise<Transaction> {
    try {
      const user = await this.userRepository.findByEmail(email);

      const hasUser = !!user;

      if (!hasUser) throw new UnauthorizedException();

      const transactionEntity = {
        ...transaction,
        owner: {
          _id: user._id,
        },
      };

      const createdTransaction = await this.transactionRepository.create(
        transactionEntity,
      );

      return createdTransaction;
    } catch (error) {
      throw new DATABASE_ERROR(error);
    }
  }
}
