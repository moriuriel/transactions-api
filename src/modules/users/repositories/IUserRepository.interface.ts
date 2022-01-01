import { ICreateUser } from '../interfaces';
import { User } from '../schemas/User.schema';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  create(user: ICreateUser): Promise<User>;
}
