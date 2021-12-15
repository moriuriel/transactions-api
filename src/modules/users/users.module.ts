import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/Users.controller';
import { UserRepository } from './repositories/User.repository';
import { User, UserSchema } from './schemas/User.schema';
import { FindUsersService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [FindUsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
