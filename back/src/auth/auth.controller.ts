import {
  Body,
  Controller,
  Post,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async createUser(@Body() user: User) {
    try {
      const createdUser = await this.authService.createUser(user);
      return createdUser;
    } catch (error) {
      return new HttpException('Error creating user', HttpStatus.BAD_REQUEST);
    }
  }
}
