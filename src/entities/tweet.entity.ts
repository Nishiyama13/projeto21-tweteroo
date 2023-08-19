import { User } from './user.entity';

export class Tweet extends User {
  private _tweet: string;

  constructor(username: string, avatar: string, tweet: string) {
    super(username, avatar);
    this._tweet = tweet;
  }

  toJSON() {
    return {
      username: this.username,
      avatar: this.avatar,
      tweet: this._tweet,
    };
  }

  get tweet(): string {
    return this._tweet;
  }
}
