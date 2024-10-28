import { IsOptional, IsString } from "class-validator";

export class User {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}