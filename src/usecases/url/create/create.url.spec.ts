import { Test, TestingModule } from '@nestjs/testing';
import { CreateUrlUseCase } from 'src/usecases/url/create/create.url.usecases';
import {
  TypeOrmOptions,
  InputCreateUrlMock,
  urlRepositoryMock,
} from 'src/domain/mocks';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from 'src/domain/entities/url.entities';

describe('CreateUrlUseCase', () => {
  let useCase: CreateUrlUseCase;

  const now = new Date();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TypeOrmOptions),
        TypeOrmModule.forFeature([Url]),
        RepositoriesModule,
      ],
      providers: [
        {
          provide: CreateUrlUseCase,
          useFactory: () => new CreateUrlUseCase(urlRepositoryMock),
          inject: [],
        },
      ],
      exports: [],
    }).compile();

    useCase = app.get<CreateUrlUseCase>(CreateUrlUseCase);
  });

  it('should contains create url method', () => {
    expect(useCase).toBeDefined();
  });

  it('should create url', async () => {
    urlRepositoryMock.insertOne.mockResolvedValue({});

    const output = await useCase.execute(InputCreateUrlMock);

    expect(output.expiresAt).toBeTruthy();
    expect(output.shortcut).toBeTruthy();
  });

  it('should contains correct expires date', async () => {
    urlRepositoryMock.insertOne.mockResolvedValue({});

    const output = await useCase.execute(InputCreateUrlMock);

    const expires = new Date(now.setDate(now.getDate() + useCase.daysToExpire));

    expect(output.expiresAt.getDate()).toBe(expires.getDate());
  });

  it('should contains incorrect expires date', async () => {
    urlRepositoryMock.insertOne.mockResolvedValue({});

    const output = await useCase.execute(InputCreateUrlMock);

    const expires = new Date(
      now.setDate(now.getDate() + useCase.daysToExpire + 1),
    );

    expect(output.expiresAt.getDate()).not.toBe(expires.getDate());
  });
});
