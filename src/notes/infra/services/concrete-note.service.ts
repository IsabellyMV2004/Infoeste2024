import { CreateNoteDto } from '#/src/notes/domain/dto/create-note.dto';
import { UpdateNoteDto } from '#/src/notes/domain/dto/update-note.dto';
import { Note } from '#/src/notes/domain/entities/note.entity';
import { NoteRepository } from '#/src/notes/domain/repositories/note.repository';
import { NoteService } from '#/src/notes/domain/services/note.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConcreteNoteService extends NoteService {
  constructor(private readonly noteRepository: NoteRepository) {
    super();
  }
  async create(noteDto: CreateNoteDto): Promise<void> {
    await this.noteRepository.create(noteDto);
  }
  async delete(id: string): Promise<void> {
    await this.noteRepository.delete(id);
  }

  async findByAuthorId(authorId: string): Promise<Note[]> {
    return this.noteRepository.findByAuthorId(authorId);
  }

  async findOne(id: string): Promise<Note> {
    return this.noteRepository.findById(id);
  }

  async update(id: string, noteDto: UpdateNoteDto): Promise<void> {
    await this.noteRepository.update(id, noteDto);
  }
}
