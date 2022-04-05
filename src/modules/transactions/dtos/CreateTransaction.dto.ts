import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TRANSACTION_TAG } from '../interfaces/shared.interface';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsBoolean()
  is_pad: boolean;

  @IsEnum(TRANSACTION_TAG)
  tag: TRANSACTION_TAG;
}
