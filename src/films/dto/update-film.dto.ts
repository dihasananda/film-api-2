import { IsNotEmpty } from 'class-validator';

export class UpdateFilmDto {
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
