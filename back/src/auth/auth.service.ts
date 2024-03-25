import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(id: number) {
    return this.prisma.user.findMany();
  }

  async createUser(user: User) {
    return this.prisma.user.create({ data: user });
  }
}
