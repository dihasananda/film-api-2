import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { FilmRepository } from './repository/film.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FilmRepository])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
