import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
//import { IsUUID } from 'class-validator';
import { UUIDValidationPipe } from 'src/pipes/uuid-validation.pipe';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { FilterFilmDto } from './dto/filter-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entity/film.entity';

@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Get()
  async getFilms(@Query() filter: FilterFilmDto): Promise<Film[]> {
    return this.filmsService.getFilms(filter);
  }

  @Get('/:id')
  async getFilm(@Param('id', UUIDValidationPipe) id: string): Promise<Film> {
    return this.filmsService.getFilmById(id);
  }

  @Post()
  async createFilm(@Body() payload: CreateFilmDto): Promise<void> {
    return this.filmsService.createFilm(payload);
  }

  @Put('/:id')
  async updateFilm(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() payload: UpdateFilmDto,
  ): Promise<void> {
    return this.filmsService.updateFilm(id, payload);
  }

  @Delete('/:id')
  async deleteFilm(@Param('id', UUIDValidationPipe) id: string): Promise<void> {
    return this.filmsService.deleteFilm(id);
  }
}
