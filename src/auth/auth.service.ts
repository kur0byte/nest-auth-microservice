// auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../user/user.repository';
// import { CreateUserDto, User } from '@/shared';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(data: any): any {
    return this.usersRepository.save(data);
  }

  getUser(id: any): any | null {
    return this.usersRepository.findOne(id);
  }
}