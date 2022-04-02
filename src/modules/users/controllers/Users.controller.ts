import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { JwtAuthGuard } from 'src/modules/authentication/guards/jwt-auth.guard';
import { CreateUserDto } from '../dtos';
import { CreateUserService, FindUserService } from '../services';

@Controller('/user')
export class UsersController {
  constructor(
    private readonly findUserService: FindUserService,
    private readonly createUserService: CreateUserService,
  ) {}

  @Post()
  async create(
    @Body() data: CreateUserDto,
    @Response() response: ExpressResponse,
  ) {
    const user = await this.createUserService.execute(data);

    return response.status(HttpStatus.CREATED).json({ user });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async listAll(@Request() request, @Response() response: ExpressResponse) {
    const { email } = request.user;
    const user = await this.findUserService.execute(email);

    return response.status(HttpStatus.OK).json({ account: user });
  }
}
