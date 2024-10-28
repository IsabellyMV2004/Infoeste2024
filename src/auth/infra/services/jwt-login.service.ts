import { LoginResponseDto } from '#/src/auth/domain/dto/login-response.dto';
import { LoginDto } from '#/src/auth/domain/dto/login.dto';
import { UserRepository } from '#/src/auth/domain/repositories/user.repository';
import { LoginService } from '#/src/auth/domain/services/login.service';
import { EncryptionService } from '#/src/common/encryption/domain/encryption.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtLoginService extends LoginService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptionService: EncryptionService,
    private readonly jwtService: JwtService,
  ) {
    super();
  }
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await this.encryptionService.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);
    return { access_token, user_name: user.name };
  }
}
