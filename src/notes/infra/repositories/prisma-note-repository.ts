import { PrismaRepository } from '#/src/common/prisma/prisma.repository';
import { CreateNoteDto } from '#/src/notes/domain/dto/create-note.dto';
import { UpdateNoteDto } from '#/src/notes/domain/dto/update-note.dto';
import { Note } from '#/src/notes/domain/entities/note.entity';
import { NoteRepository } from '#/src/notes/domain/repositories/note.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNoteRepository extends NoteRepository {
  constructor(private readonly prisma: PrismaRepository) {
    super();
  }

  async create(note: CreateNoteDto): Promise<Note> {
    return this.prisma.note.create({ data: note });
  }

  async update(id: string, note: UpdateNoteDto): Promise<Note> {
    return this.prisma.note.update({ where: { id }, data: note });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.note.delete({ where: { id } });
  }

  async findByAuthorId(authorId: string): Promise<Note[]> {
    return this.prisma.note.findMany({ where: { authorId } });
  }

  async findById(id: string): Promise<Note> {
    return this.prisma.note.findUnique({ where: { id } });
  }
}
