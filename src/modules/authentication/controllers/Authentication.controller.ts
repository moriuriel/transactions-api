import { Response as ExpressResponse } from 'express';
import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { IAuthenticationUser } from '../interfaces';
import AuthenticationService from '../services/Authentication.service';

@Controller('auth')
export default class AuthenticationController {
  constructor(private readonly authenticateUser: AuthenticationService) {}

  @Post()
  public async index(
    @Body() data: IAuthenticationUser,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const { email, password } = data;

    const auth = await this.authenticateUser.execute({
      email,
      password,
    });

    return response.status(HttpStatus.CREATED).json(auth);
  }
}
