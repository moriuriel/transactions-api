import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UserRepository } from 'src/modules/users/repositories/User.repository';
import { IAuthenticationUser } from '../interfaces';

interface AuthReponse {
  access_token: string;
}

@Injectable()
export default class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,

    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async execute(data: IAuthenticationUser): Promise<AuthReponse> {
    const { email, password } = data;

    const checkUserExist = await this.userRepository.findByEmail(email);

    if (!checkUserExist) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found.',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const validatePassword = await this.compareHash(
      password,
      checkUserExist.password,
    );

    if (!validatePassword) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User/Password is worng.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const payload = { sub: checkUserExist.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
