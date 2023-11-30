import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import type { User, CreateUserDto } from './users.entity';
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(user: CreateUserDto): Promise<void> {
    await this.usersRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }
}
