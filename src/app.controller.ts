import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
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

  @Get('/tweets')
  getTweets(@Query('page') page?: number) {
    if (page <= 0) {
      throw new HttpException(
        'Informe uma página válida!',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!page) {
      const lastFifteenTweets = this.appService.getLastFifteenTweets();
      return lastFifteenTweets;
    }
    const tweetsByPage = this.appService.getTweetsByPage(page);
    return tweetsByPage;
  }

  @Get('/tweets/:username')
  getTweetsByUsername(@Param('username') username: string) {
    const userTweets = this.appService.getTweetsByUsername(username);
    return userTweets;
  }
}
