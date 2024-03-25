import { ConfigService } from '@nestjs/config';
export declare class AppService {
    private Config;
    constructor(Config: ConfigService);
    getHello(): string;
}
