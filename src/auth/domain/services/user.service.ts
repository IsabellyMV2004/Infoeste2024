import { RegisterDto } from '#/src/auth/domain/dto/register.dto';

export abstract class UserService {
  abstract register(registerDto: RegisterDto): Promise<void>;
  abstract exists(email: string): Promise<boolean>;
}
