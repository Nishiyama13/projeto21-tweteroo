import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private users: User[];
  constructor() {
    this.users = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }
  cerateUser(body: CreateUserDTO) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }
}
