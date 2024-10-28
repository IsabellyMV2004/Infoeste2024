import { CreateNoteDto } from '#/src/notes/domain/dto/create-note.dto';
import { UpdateNoteDto } from '#/src/notes/domain/dto/update-note.dto';
import { Note } from '#/src/notes/domain/entities/note.entity';

export abstract class NoteService {
  abstract create(noteDto: CreateNoteDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findByAuthorId(authorId: string): Promise<Note[]>;
  abstract findOne(id: string): Promise<Note>;
  abstract update(id: string, noteDto: UpdateNoteDto): Promise<void>;
}
