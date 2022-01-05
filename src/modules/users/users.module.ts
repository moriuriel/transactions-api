import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/Users.controller';
import { UserRepository } from './repositories/User.repository';
import { User, UserSchema } from './schemas/User.schema';
import { CreateUserService, FindUsersService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [FindUsersService, CreateUserService, UserRepository],
  controllers: [UsersController],
  exports: [UserRepository],
})
export class UsersModule {}
