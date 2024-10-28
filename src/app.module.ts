import { AuthModule } from '#/src/auth/auth.module';
import { PrismaModule } from '#/src/common/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [PrismaModule, AuthModule, NotesModule],
  exports: [PrismaModule],
})
export class AppModule {}
