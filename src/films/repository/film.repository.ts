import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateFilmDto } from '../dto/create-film.dto';
import { FilterFilmDto } from '../dto/filter-film.dto';
import { Film } from '../entity/film.entity';

@EntityRepository(Film)
export class FilmRepository extends Repository<Film> {
  async getFilms(filter: FilterFilmDto): Promise<Film[]> {
    const { title, release_date, original_language } = filter;

    const query = this.createQueryBuilder('book');

    if (title) {
      query.andWhere('lower(film.title) LIKE :title', {
        title: `%${title.toLowerCase()}%`,
      });
    }

    if (release_date) {
      query.andWhere('lower(film.release_date) LIKE :release_date', {
        release_date: `%${release_date.toLowerCase()}`,
      });
    }

    if (original_language) {
      query.andWhere('lower(book.original_language) LIKE :original_language', {
        original_language: `%${original_language.toLowerCase()}`,
      });
    }

    return await query.getMany();
  }

  async createFilm(createFilmDto: CreateFilmDto): Promise<void> {
    const { title, release_date, original_language, overview, poster_path } = createFilmDto;

    const film = this.create();
    film.title = title;
    film.release_date = release_date;
    film.original_language = original_language;
    film.overview = overview;
    film.poster_path = poster_path;

    try {
      await film.save();
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}
