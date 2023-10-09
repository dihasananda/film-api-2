import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFilmDto } from './dto/create-film.dto';
import { FilterFilmDto } from './dto/filter-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entity/film.entity';
import { FilmRepository } from './repository/film.repository';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(FilmRepository)
    private readonly filmRepository: FilmRepository,
  ) {}

  async getFilms(filter: FilterFilmDto): Promise<Film[]> {
    return await this.filmRepository.getFilms(filter);
  }

  async createFilm(createFilmDto: CreateFilmDto): Promise<void> {
    return await this.filmRepository.createFilm(createFilmDto);
  }

  async getFilmById(id: string): Promise<Film> {
    const book = await this.filmRepository.findOne(id);
    if (!book) {
      throw new NotFoundException(`Film with id ${id} is not found`);
    }
    return book;
  }

  async updateFilm(id: string, updateFilmDto: UpdateFilmDto): Promise<void> {
    const { title, release_date, original_language, overview, poster_path } = updateFilmDto;

    const film = await this.getFilmById(id);
    film.title = title;
    film.release_date = release_date;
    film.original_language = original_language;
    film.overview = overview;
    film.poster_path = poster_path;

    await film.save();
  }

  async deleteFilm(id: string): Promise<void> {
    const result = await this.filmRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Film with id ${id} is not found`);
    }
  }
}
