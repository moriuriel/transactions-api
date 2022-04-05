import { TRANSACTION_TAG } from '../interfaces/shared.interface';
import { FakeTransactionRepository } from '../repositories/FakeTransaction.repository';
import { CreateTransactionsService } from './CreateTransactions.service';

let createTransactionService: CreateTransactionsService;
let fakeTransactionRepository: FakeTransactionRepository;

describe('Create User Service', () => {
  beforeEach(() => {
    fakeTransactionRepository = new FakeTransactionRepository();

    createTransactionService = new CreateTransactionsService(
      fakeTransactionRepository,
    );
  });
  test('should be defined', () => {
    expect(createTransactionService).toBeInstanceOf(CreateTransactionsService);
  });

  test('should be return created transaction', async () => {
    const createTransactionSpy = jest.spyOn(
      createTransactionService,
      'execute',
    );

    const transactionEntity = {
      isPaid: false,
      tag: TRANSACTION_TAG.INCOME,
      Owner: { _id: 'valid-owner-id' },
      title: 'valid-title',
    };

    const user = await createTransactionService.execute(transactionEntity);

    expect(user).toHaveProperty('title');

    expect(createTransactionSpy).toHaveBeenCalledTimes(1);
  });
});
