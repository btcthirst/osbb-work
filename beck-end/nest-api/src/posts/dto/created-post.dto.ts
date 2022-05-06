import { IsNotEmpty, IsString } from 'class-validator';

export class CreatedPostDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsString()
  author: string;
}
