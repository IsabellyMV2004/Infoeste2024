import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Expose()
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
