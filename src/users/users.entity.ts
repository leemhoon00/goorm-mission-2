import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  name!: string;
}

export interface CreateUserDto {
  name: string;
}
