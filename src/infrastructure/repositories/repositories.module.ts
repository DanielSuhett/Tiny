import { Module } from '@nestjs/common';
import { UrlRepository } from './url.repository';

@Module({
  imports: [],
  providers: [UrlRepository],
  exports: [UrlRepository],
})
export class RepositoriesModule {}
