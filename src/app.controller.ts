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
import { CreateTweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('/sign-up')
  createUser(@Body() body: CreateUserDTO) {
    this.appService.createUser(body);
    throw new HttpException('Ok', HttpStatus.OK);
  }

  @Post('/tweets')
  createTweet(@Body() body: CreateTweetDTO) {
    this.appService.createTweet(body);
  }
}
