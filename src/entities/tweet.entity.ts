export class Tweet {
  private _username: string;
  private _tweet: string;

  constructor(username: string, tweet: string) {
    this._username = username;
    this._tweet = tweet;
  }

  get username(): string {
    return this._username;
  }

  get tweet(): string {
    return this._tweet;
  }
}
