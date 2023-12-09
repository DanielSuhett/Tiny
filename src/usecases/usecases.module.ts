import { Module } from '@nestjs/common';

import { CreateUrlUseCase } from 'src/usecases/url/create/create.url.usecases';
import { ReduceDestinyUrlUseCase } from 'src/usecases/url/reduce/reduce.url.usecases';
import { FindUrlUseCase } from 'src/usecases/url/find/find.url.usecases';
import { FindUrlByOwnerUseCase } from 'src/usecases/url/findByOwner/findByOwner.url.usecases';

import { UrlRepository } from 'src/infrastructure/repositories/url.repository';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [],
  providers: [
    {
      provide: CreateUrlUseCase.name,
      useFactory: (UrlRepository) => new CreateUrlUseCase(UrlRepository),
      inject: [UrlRepository],
    },
    {
      provide: ReduceDestinyUrlUseCase.name,
      useFactory: () => new ReduceDestinyUrlUseCase(),
      inject: [],
    },
    {
      provide: FindUrlUseCase.name,
      useFactory: (UrlRepository) => new FindUrlUseCase(UrlRepository),
      inject: [UrlRepository],
    },
    {
      provide: FindUrlByOwnerUseCase.name,
      useFactory: (UrlRepository) => new FindUrlByOwnerUseCase(UrlRepository),
      inject: [UrlRepository],
    },
  ],
  exports: [
    CreateUrlUseCase.name,
    ReduceDestinyUrlUseCase.name,
    FindUrlUseCase.name,
    FindUrlByOwnerUseCase.name,
  ],
})
export class UseCasesModule {}
