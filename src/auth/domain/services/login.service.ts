import { LoginResponseDto } from '#/src/auth/domain/dto/login-response.dto';
import { LoginDto } from '#/src/auth/domain/dto/login.dto';

export abstract class LoginService {
  abstract login(loginDto: LoginDto): Promise<LoginResponseDto>;
}
