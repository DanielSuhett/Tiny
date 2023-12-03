import { Test, TestingModule } from '@nestjs/testing';
import { CreateUrlUseCase } from 'src/usecases/url/create/create.url.usecases';
import { UrlRepository } from 'src/infrastructure/repositories/url.repository';
import { inputMock, urlRepositoryMock } from 'src/domain/mocks';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';

describe('CreateUrlUseCase', () => {
  let useCase: CreateUrlUseCase;

  const now = new Date();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [RepositoriesModule],
      providers: [
        {
          provide: CreateUrlUseCase,
          useFactory: (UrlRepository) => new CreateUrlUseCase(UrlRepository),
          inject: [UrlRepository],
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

    const output = await useCase.execute(inputMock);

    expect(output.expires).toBeTruthy();
    expect(output.shortcut).toBeTruthy();
  });

  it('should contains correct expires date', async () => {
    urlRepositoryMock.insertOne.mockResolvedValue({});

    const expires = new Date(now.setDate(now.getDate() + useCase.daysToExpire));

    const output = await useCase.execute(inputMock);

    expect(output.expires.getDay()).toBe(expires.getDay());
  });

  it('should contains incorrect expires date', async () => {
    urlRepositoryMock.insertOne.mockResolvedValue({});

    const expires = new Date(
      now.setDate(now.getDate() + useCase.daysToExpire + 30),
    );

    const output = await useCase.execute(inputMock);

    expect(output.expires.getDay()).not.toBe(expires.getDay());
  });
});
