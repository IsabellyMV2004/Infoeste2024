import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class LoginResponseDto {
  @Expose()
  @IsString()
  access_token: string;

  @Expose()
  @IsString()
  user_name: string;
}
