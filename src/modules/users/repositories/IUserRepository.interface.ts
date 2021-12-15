import { User } from '../schemas/User.schema';

export interface IUserRepository {
  findAll(): Promise<User[]>;
}
