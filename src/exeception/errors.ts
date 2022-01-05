import { HttpException, HttpStatus } from '@nestjs/common';

export class DATABASE_ERROR extends HttpException {
  constructor(error: string) {
    super(error, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
