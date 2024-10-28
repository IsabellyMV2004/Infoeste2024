import { UserRepository } from '#/src/auth/domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaRepository } from 'src/common/prisma/prisma.repository';

@Injectable()
export class PrismaUserRepository extends UserRepository {
  constructor(private readonly prisma: PrismaRepository) {
    super();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.create({ data: user });
  }
}
