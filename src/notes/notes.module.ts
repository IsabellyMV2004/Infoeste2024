import { NoteRepository } from '#/src/notes/domain/repositories/note.repository';
import { NoteService } from '#/src/notes/domain/services/note.service';
import { NotesController } from '#/src/notes/infra/controllers/notes.controller';
import { OwnerGuard } from '#/src/notes/infra/guards/owner.guard';
import { PrismaNoteRepository } from '#/src/notes/infra/repositories/prisma-note-repository';
import { ConcreteNoteService } from '#/src/notes/infra/services/concrete-note.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [NotesController],
  providers: [
    {
      provide: NoteRepository,
      useClass: PrismaNoteRepository,
    },
    {
      provide: NoteService,
      useClass: ConcreteNoteService,
    },
    OwnerGuard,
  ],
})
export class NotesModule {}
