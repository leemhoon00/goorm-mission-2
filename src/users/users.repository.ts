import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User, CreateUserDto } from './users.entity';

export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(user: CreateUserDto): Promise<void> {
    await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
