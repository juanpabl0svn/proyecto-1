import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
    }[]>;
    createUser(user: User): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
    }>;
}
