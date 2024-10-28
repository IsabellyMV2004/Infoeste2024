import { Priority } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';

export class Note {
  @Expose()
  @IsString()
  id?: string;

  @Expose()
  @IsString()
  title: string;

  @Expose()
  @IsString()
  content: string;

  @Expose()
  @IsEnum(Priority)
  priority: Priority;

  @Expose()
  @IsString()
  authorId: string;

  constructor(partial: Partial<Note>) {
    Object.assign(this, partial);
  }
}
