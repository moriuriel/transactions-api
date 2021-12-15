import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/IUserRepository.interface';
import { UserRepository } from '../repositories/User.repository';
import { User } from '../schemas/User.schema';

@Injectable()
export class FindUsersService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
