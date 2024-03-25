/// <reference types="cookie-parser" />
import { Response, Request } from 'express';
export declare class AppController {
    constructor();
    getHello(res: Response): Response<any, Record<string, any>>;
    getHello2(req: Request, res: Response): Response<any, Record<string, any>>;
}
