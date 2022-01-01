import { Inject, Injectable } from '@nestjs/common';
import { ICreateUser } from '../interfaces';
import { IUserRepository } from '../repositories/IUserRepository.interface';
import { UserRepository } from '../repositories/User.repository';
import { User } from '../schemas/User.schema';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async execute(user: ICreateUser): Promise<User> {
    return this.userRepository.create(user);
  }
}
