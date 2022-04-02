import { FakeUserRepository } from '../repositories/FakeUser.repository';
import { CreateUserService } from './CreateUser.service';

let createUserService: CreateUserService;
let fakeUserRepository: FakeUserRepository;

describe('Create User Service', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();

    createUserService = new CreateUserService(fakeUserRepository);
  });
  test('should be defined', () => {
    expect(createUserService).toBeInstanceOf(CreateUserService);
  });

  test('should be return created user', async () => {
    const createUserSpy = jest.spyOn(createUserService, 'execute');

    const userEntity = {
      name: 'valid-user',
      email: 'valid-email',
      password: 'valid-pass',
      user_name: 'valid-user-name',
    };

    const user = await createUserService.execute(userEntity);

    expect(user).toHaveProperty('name');

    expect(createUserSpy).toHaveBeenCalledTimes(1);
  });
});
