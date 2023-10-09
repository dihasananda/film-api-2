import { IsOptional } from 'class-validator';

export class FilterFilmDto {
  @IsOptional()
  title: string;

  @IsOptional()
  release_date: string;

  @IsOptional()
  original_language: string;

  @IsOptional()
  overview: string;

  @IsOptional()
  poster_path: string;
}
