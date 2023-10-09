import { IsNotEmpty } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  release_date: string;

  @IsNotEmpty()
  original_language: string;

  @IsNotEmpty()
  overview: string;

  @IsNotEmpty()
  poster_path: string;
}
