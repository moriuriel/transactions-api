import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/IUserRepository.interface';
import { UserRepository } from '../repositories/User.repository';
import { User } from '../schemas/User.schema';

@Injectable()
export class FindUserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: IUserRepository,
  ) {}

  async execute(email): Promise<User> {
    return this.userRepository.findByEmail(email);
  }
}
