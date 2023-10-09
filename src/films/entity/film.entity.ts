import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  release_date: string;

  @Column()
  original_language: string;

  @Column()
  overview: string;

  @Column()
  poster_path: string;
}
