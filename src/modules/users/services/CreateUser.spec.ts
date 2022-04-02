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
});
