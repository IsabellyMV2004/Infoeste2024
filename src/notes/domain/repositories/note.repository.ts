import { CreateNoteDto } from '#/src/notes/domain/dto/create-note.dto';
import { UpdateNoteDto } from '#/src/notes/domain/dto/update-note.dto';
import { Note } from '#/src/notes/domain/entities/note.entity';

export abstract class NoteRepository {
  abstract create(note: CreateNoteDto): Promise<Note>;
  abstract update(id: string, note: UpdateNoteDto): Promise<Note>;
  abstract delete(id: string): Promise<void>;
  abstract findByAuthorId(id: string): Promise<Note[]>;
  abstract findById(id: string): Promise<Note>;
}
