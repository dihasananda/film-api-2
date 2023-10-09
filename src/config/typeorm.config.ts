import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: PGHOST,
  port: PGPORT,
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};
