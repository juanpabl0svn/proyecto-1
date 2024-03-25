import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private Config : ConfigService){

  }
  getHello(): string {
    console.log(this.Config.get('DATABASE_PASSWORD'))
    return 'Hello World!';
  }
}
