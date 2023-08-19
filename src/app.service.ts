import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetDTO } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private _users: User[] = [];
  private _tweets: Tweet[] = [];

  constructor() {
    this._users = [];
    this._tweets = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }
  createUser(body: CreateUserDTO) {
    const user = new User(body.username, body.avatar);
    return this._users.push(user);
  }

  createTweet(body: CreateTweetDTO) {
    const userExists = this.isUserRegistered(body.username);
    if (!userExists) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const tweet = new Tweet(body.username, body.tweet);
    return this._tweets.push(tweet);
  }

  isUserRegistered(username: string): boolean {
    const userExists = this._users.find((user) => user.username === username);
    return !!userExists;
  }
}
