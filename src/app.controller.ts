import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('/sign-up')
  createUser(@Body() body: CreateUserDTO) {
    this.appService.cerateUser(body);
    throw new HttpException('Ok', HttpStatus.OK);
  }
}
