import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from 'src/domain/entities/url.entities';
import { UrlRepository } from 'src/infrastructure/repositories/url.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  providers: [UrlRepository],
  exports: [UrlRepository],
})
export class RepositoriesModule {}
