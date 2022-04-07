import { FakeUserRepository } from 'src/modules/users/repositories/FakeUser.repository';
import { TRANSACTION_TAG } from '../interfaces/shared.interface';
import { FakeTransactionRepository } from '../repositories/FakeTransaction.repository';
import { FindByOwnerIdService } from './FindByOwnerId.service';

let findByOwnerIdService: FindByOwnerIdService;
let fakeTransactionRepository: FakeTransactionRepository;
let fakeUserRepository: FakeUserRepository;

describe('Create User Service', () => {
  beforeEach(() => {
    fakeTransactionRepository = new FakeTransactionRepository();
    fakeUserRepository = new FakeUserRepository();

    findByOwnerIdService = new FindByOwnerIdService(
      fakeTransactionRepository,
      fakeUserRepository,
    );
  });
  test('should be defined', () => {
    expect(findByOwnerIdService).toBeInstanceOf(FindByOwnerIdService);
  });

  test('should be return transactions', async () => {
    const findByOwnerIdSpy = jest.spyOn(findByOwnerIdService, 'execute');

    const userEntity = {
      name: 'valid-user',
      email: 'valid-email',
      password: 'valid-pass',
      user_name: 'valid-user-name',
    };

    const user = await fakeUserRepository.create(userEntity);

    const transactionEntity = {
      is_pad: false,
      tag: TRANSACTION_TAG.INCOME,
      title: 'valid-title',
      owner: {
        _id: user._id,
      },
    };

    const transaction = await fakeTransactionRepository.create(
      transactionEntity,
    );

    const transactions = await findByOwnerIdService.execute(userEntity.email);

    expect(transactions).toEqual([transaction]);

    expect(findByOwnerIdSpy).toHaveBeenCalledTimes(1);
  });
});
