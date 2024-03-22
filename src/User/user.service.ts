import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'john',
        password: bcrypt.hashSync('john', 10),
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
