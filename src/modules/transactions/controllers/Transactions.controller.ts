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
import { CreateTransactionDto } from '../dtos/CreateTransaction.dto';
import { CreateTransactionsService, FindByOwnerIdService } from '../services';

@UseGuards(JwtAuthGuard)
@Controller('/transactions')
export class TransactionsController {
  constructor(
    private readonly createTransactionService: CreateTransactionsService,
    private readonly findByOwnerIdService: FindByOwnerIdService,
  ) {}

  @Post()
  async create(
    @Body() data: CreateTransactionDto,
    @Request() request,
    @Response() response: ExpressResponse,
  ) {
    const { email } = request.user;

    const transaction = await this.createTransactionService.execute({
      transaction: data,
      email,
    });

    return response.status(HttpStatus.CREATED).json({ transaction });
  }

  @Get()
  async findByOwnerId(
    @Request() request,
    @Response() response: ExpressResponse,
  ) {
    const { email } = request.user;

    const transaction = await this.findByOwnerIdService.execute(email);

    return response.status(HttpStatus.OK).json({ transaction });
  }
}
