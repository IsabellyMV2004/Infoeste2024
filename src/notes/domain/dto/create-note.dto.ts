import { CreateNoteRequestDto } from '#/src/notes/domain/dto/create-note-request.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateNoteDto extends CreateNoteRequestDto {
  @Expose()
  @ApiProperty()
  @IsString()
  authorId: string;
}
