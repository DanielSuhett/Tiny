import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Url } from 'src/domain/entities/url.entities';

export const TypeOrmOptions: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: [Url],
  dropSchema: true,
  synchronize: true,
  logging: false,
};
