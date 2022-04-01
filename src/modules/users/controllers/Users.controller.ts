import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
  UseGuards,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { JwtAuthGuard } from 'src/modules/authentication/guards/jwt-auth.guard';
import { CreateUserDto } from '../dtos';
import { CreateUserService, FindUsersService } from '../services';

@Controller('users')
export class UsersController {
  constructor(
    private readonly findUsersService: FindUsersService,
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
  @Get()
  async listAll(@Response() response: ExpressResponse) {
    const users = await this.findUsersService.execute();

    return response.status(HttpStatus.OK).json({ users });
  }
}
