import { IUser } from '../interfaces';
import { User } from '../schemas/User.schema';
import { IUserRepository } from './IUserRepository.interface';

export class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  async create(user: IUser): Promise<User> {
    const newUser = new User();

    Object.assign(newUser, {
      ...user,
    });

    this.users.push(newUser);

    return newUser;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
