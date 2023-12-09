import { Test, TestingModule } from '@nestjs/testing';
import {
  InputFindByOwnerUrlMock,
  OutputFindByOwnerUrlMock,
  TypeOrmOptions,
  urlRepositoryMock,
} from 'src/domain/mocks';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from 'src/domain/entities/url.entities';
import { FindUrlByOwnerUseCase } from 'src/usecases/url/findByOwner/findByOwner.url.usecases';

describe('FindUrlByOwnerUseCase', () => {
  let useCase: FindUrlByOwnerUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TypeOrmOptions),
        TypeOrmModule.forFeature([Url]),
        RepositoriesModule,
      ],
      providers: [
        {
          provide: FindUrlByOwnerUseCase,
          useFactory: () => new FindUrlByOwnerUseCase(urlRepositoryMock),
          inject: [],
        },
      ],
      exports: [],
    }).compile();

    useCase = app.get<FindUrlByOwnerUseCase>(FindUrlByOwnerUseCase);

    jest.clearAllMocks();
  });

  it('find by owner usecase should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should found urls by owner', async () => {
    urlRepositoryMock.findMany.mockResolvedValue(OutputFindByOwnerUrlMock);

    const output = await useCase.execute(InputFindByOwnerUrlMock);

    expect(output).toBe(OutputFindByOwnerUrlMock);
  });

  it('should not found urls by owner', async () => {
    urlRepositoryMock.findMany.mockResolvedValue([]);

    const output = await useCase.execute(InputFindByOwnerUrlMock);

    expect(output).not.toBe(OutputFindByOwnerUrlMock);
  });
});
