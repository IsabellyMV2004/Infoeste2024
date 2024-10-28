import { Module } from '@nestjs/common';
import { UserController } from './infra/controllers/user.controller';
import { UserService } from './domain/services/user.service';
import { ConcreteUserService } from './infra/services/concrete-user.service';
import { UserRepository } from './domain/repositories/user.repository';
import { PrismaUserRepository } from './infra/repositories/prisma-user.repository';
import { EncryptionService } from 'src/common/prisma/encryption/domain/encryption.service';
import { BcryptEncryptionService } from './infra/bcrypt-encryption.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: ConcreteUserService
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: EncryptionService,
      useClass: BcryptEncryptionService
    }
  ]
})
export class UserModule {}
