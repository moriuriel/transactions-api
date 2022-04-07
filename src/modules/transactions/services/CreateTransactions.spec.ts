import { HttpException } from '@nestjs/common';
import { FakeUserRepository } from 'src/modules/users/repositories/FakeUser.repository';
import { TRANSACTION_TAG } from '../interfaces/shared.interface';
import { FakeTransactionRepository } from '../repositories/FakeTransaction.repository';
import { CreateTransactionsService } from './CreateTransactions.service';

let createTransactionService: CreateTransactionsService;
let fakeTransactionRepository: FakeTransactionRepository;
let fakeUserRepository: FakeUserRepository;

describe('Create Transaction Service', () => {
  beforeEach(() => {
    fakeTransactionRepository = new FakeTransactionRepository();
    fakeUserRepository = new FakeUserRepository();

    createTransactionService = new CreateTransactionsService(
      fakeTransactionRepository,
      fakeUserRepository,
    );
  });
  test('should be defined', () => {
    expect(createTransactionService).toBeInstanceOf(CreateTransactionsService);
  });

  test('should be return created transaction', async () => {
    const userEntity = {
      name: 'valid-user',
      email: 'valid-email',
      password: 'valid-pass',
      user_name: 'valid-user-name',
    };

    await fakeUserRepository.create(userEntity);

    const createTransactionSpy = jest.spyOn(
      createTransactionService,
      'execute',
    );

    const transactionEntity = {
      is_pad: false,
      tag: TRANSACTION_TAG.INCOME,
      title: 'valid-title',
    };

    const user = await createTransactionService.execute({
      transaction: transactionEntity,
      email: userEntity.email,
    });

    expect(user).toHaveProperty('title');

    expect(createTransactionSpy).toHaveBeenCalledTimes(1);
  });

  test('should be return throw error ', async () => {
    const transactionEntity = {
      is_pad: false,
      tag: TRANSACTION_TAG.INCOME,
      title: 'valid-title',
    };

    expect(
      createTransactionService.execute({
        transaction: transactionEntity,
        email: 'invalid-email',
      }),
    ).rejects.toBeInstanceOf(HttpException);
  });
});
