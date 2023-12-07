import { Test, TestingModule } from '@nestjs/testing';
import { FindUrlUseCase } from 'src/usecases/url/find/find.url.usecases';
import {
  InputFindUrlMock,
  OutputFindUrlMock,
  TypeOrmOptions,
  urlRepositoryMock,
} from 'src/domain/mocks';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from 'src/domain/entities/url.entities';

describe('FindUrlUseCase', () => {
  let useCase: FindUrlUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TypeOrmOptions),
        TypeOrmModule.forFeature([Url]),
        RepositoriesModule,
      ],
      providers: [
        {
          provide: FindUrlUseCase,
          useFactory: () => new FindUrlUseCase(urlRepositoryMock),
          inject: [],
        },
      ],
      exports: [],
    }).compile();

    useCase = app.get<FindUrlUseCase>(FindUrlUseCase);

    jest.clearAllMocks();
  });

  it('find usecase should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should found url', async () => {
    urlRepositoryMock.findOne.mockResolvedValue(OutputFindUrlMock);

    const output = await useCase.execute(InputFindUrlMock);

    expect(output).toBe(OutputFindUrlMock);
  });

  it('should not found url', async () => {
    urlRepositoryMock.findOne.mockResolvedValue(null);

    const output = await useCase.execute(InputFindUrlMock);

    expect(output).not.toBe(OutputFindUrlMock);
  });
});
