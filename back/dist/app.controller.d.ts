/// <reference types="cookie-parser" />
import { AppService } from './app.service';
import { Response, Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(res: Response): Response<any, Record<string, any>>;
    getHello2(req: Request, res: Response): Response<any, Record<string, any>>;
}
