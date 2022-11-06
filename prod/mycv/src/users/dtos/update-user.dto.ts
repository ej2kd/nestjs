import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpateUserDto {
  @IsEmail()
  @IsOptional()
  email: string

  @IsString()
  @IsOptional()
  password: string
}