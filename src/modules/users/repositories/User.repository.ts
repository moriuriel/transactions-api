import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICreateUser } from '../interfaces';
import { User, UserDocument } from '../schemas/User.schema';
import { IUserRepository } from './IUserRepository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name) private userRespository: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRespository.find();
  }

  async create(user: ICreateUser): Promise<User> {
    return this.userRespository.create(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRespository.findOne({ email });
  }
}
