import { CustomRequest } from '#/src/auth/domain/dto/custom-request.dto';
import { JwtAuthGuard } from '#/src/auth/infra/guards/jwt/jwt-auth.guard';
import { CreateNoteRequestDto } from '#/src/notes/domain/dto/create-note-request.dto';
import { UpdateNoteDto } from '#/src/notes/domain/dto/update-note.dto';
import { NoteService } from '#/src/notes/domain/services/note.service';
import { OwnerGuard } from '#/src/notes/infra/guards/owner.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('notes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(
    @Request() req: CustomRequest,
    @Body() createNoteDto: CreateNoteRequestDto,
  ) {
    const authorId = req.user.id;
    return this.noteService.create({ ...createNoteDto, authorId });
  }

  @UseGuards(OwnerGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.noteService.delete(id);
  }

  @Get()
  async findByAuthorId(@Request() req: CustomRequest) {
    const authorId = req.user.id;
    return this.noteService.findByAuthorId(authorId);
  }

  @UseGuards(OwnerGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(id, updateNoteDto);
  }
}
