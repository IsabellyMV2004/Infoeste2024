import { Priority } from '#/src/notes/domain/entities/priority.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';

export class CreateNoteRequestDto {
  @Expose()
  @ApiProperty()
  @IsString()
  title: string;

  @Expose()
  @ApiProperty()
  @IsString()
  content: string;

  @Expose()
  @ApiProperty()
  @IsEnum(Priority)
  priority: Priority;
}
