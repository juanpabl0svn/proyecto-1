import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  alive() {
    return 'I am alive!';
  }
}
