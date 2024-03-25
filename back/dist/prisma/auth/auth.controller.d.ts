import { User } from '@prisma/client';
import { Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createUser(user: User, res: Response): Promise<Response<any, Record<string, any>>>;
}
