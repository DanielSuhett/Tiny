import { Module } from '@nestjs/common';
import { CreateUrlUseCase } from './url/create/create.url.usecases';
import { ReduceDestinyUrlUseCase } from './url/reduce/reduce.url.usecases';
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
  ],
  exports: [CreateUrlUseCase],
})
export class UseCasesModule {}
