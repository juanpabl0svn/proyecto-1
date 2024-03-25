import { HttpException } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createUser(user: User): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
    } | HttpException>;
}
