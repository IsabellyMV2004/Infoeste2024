import { Priority } from '#/src/notes/domain/entities/priority.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto {
  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;

  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsString()
  content?: string;

  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;

  @Expose()
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
