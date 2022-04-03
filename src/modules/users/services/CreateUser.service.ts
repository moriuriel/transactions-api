import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { DATABASE_ERROR } from 'src/shared/exeception';

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
    const { email, name, password, user_name } = user;

    const hashedPassword = await this.generateHash(password);

    try {
      const user = await this.userRepository.create({
        email,
        name,
        user_name,
        password: hashedPassword,
      });

      return user;
    } catch (error) {
      throw new DATABASE_ERROR(error);
    }
  }

  private async generateHash(password: string): Promise<string> {
    return hash(password, 8);
  }
}
