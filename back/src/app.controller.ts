import { Controller, Get, HttpStatus, Param, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { SupabaseStrategy } from './database/database.service';

@Controller()
export class AppController {
  constructor(private database: SupabaseStrategy) {}

  @Get()
  getHello(@Res() res: Response) {

    return res.status(HttpStatus.METHOD_NOT_ALLOWED).json({ message: 'Method not allowed' });

  }

  @Get(':id')
  getHello2(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;

    if (id == '1') {
      return res.status(HttpStatus.NOT_FOUND).send('Error');
    }
    return res.status(HttpStatus.OK).send('OK');
  }
}
