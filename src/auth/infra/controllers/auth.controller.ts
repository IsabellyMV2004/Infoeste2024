import { LoginDto } from '#/src/auth/domain/dto/login.dto';
import { RegisterDto } from '#/src/auth/domain/dto/register.dto';
import { LoginService } from '#/src/auth/domain/services/login.service';
import { UserService } from '#/src/auth/domain/services/user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  @ApiResponse({ status: 201, example: { access_token: '1234' } })
  async login(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto);
  }

  @Get('exists/:email')
  async exists(@Param('email') email: string) {
    return this.userService.exists(email);
  }
}
