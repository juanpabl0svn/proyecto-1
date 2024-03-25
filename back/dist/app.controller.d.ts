/// <reference types="cookie-parser" />
import { Response, Request } from 'express';
import { SupabaseStrategy } from './database/database.service';
export declare class AppController {
    private database;
    constructor(database: SupabaseStrategy);
    getHello(res: Response): Response<any, Record<string, any>>;
    getHello2(req: Request, res: Response): Response<any, Record<string, any>>;
}
