import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class User {
  @Expose()
  @IsString()
  id?: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
