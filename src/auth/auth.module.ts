import { UserRepository } from '#/src/auth/domain/repositories/user.repository';
import { LoginService } from '#/src/auth/domain/services/login.service';
import { UserService } from '#/src/auth/domain/services/user.service';
import { AuthController } from '#/src/auth/infra/controllers/auth.controller';
import { JwtStrategy } from '#/src/auth/infra/guards/jwt/jwt-strategy';
import { PrismaUserRepository } from '#/src/auth/infra/repositories/prisma-user.repository';
import { ConcreteUserService } from '#/src/auth/infra/services/concrete-user.service';
import { JwtLoginService } from '#/src/auth/infra/services/jwt-login.service';
import { EncryptionService } from '#/src/common/encryption/domain/encryption.service';
import { BCryptEncryptionService } from '#/src/common/encryption/infra/bcrypt-encryption.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: LoginService,
      useClass: JwtLoginService,
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: EncryptionService,
      useClass: BCryptEncryptionService,
    },
    {
      provide: UserService,
      useClass: ConcreteUserService,
    },
    JwtStrategy,
  ],
})
export class AuthModule {}
