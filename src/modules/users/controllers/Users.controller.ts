import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { FindUsersService } from '../services';

@Controller('users')
export class UsersController {
  constructor(private readonly findUsersService: FindUsersService) {}

  @Get()
  async listAll(@Response() response: ExpressResponse) {
    const users = this.findUsersService.execute();

    return response.status(HttpStatus.OK).json({ users });
  }
}
