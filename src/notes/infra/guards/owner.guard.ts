import { CustomRequest } from '#/src/auth/domain/dto/custom-request.dto';
import { NoteService } from '#/src/notes/domain/services/note.service';
import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';

export class OwnerGuard implements CanActivate {
  constructor(
    @Inject(NoteService) private readonly notesService: NoteService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<CustomRequest>();
    const noteId = request.params.id;
    const userId = request.user.id;

    const note = await this.notesService.findOne(noteId);

    return note.authorId === userId;
  }
}
