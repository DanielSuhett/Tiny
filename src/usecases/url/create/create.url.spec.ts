import { Test, TestingModule } from '@nestjs/testing';
import { createUrlUseCase } from 'src/usecases/url/create/create.url.usecases';
import { InputCreateUrlDto } from 'src/usecases/url/create/create.url.dto';

describe('createUrlUseCase', () => {
  let useCase: createUrlUseCase;
  const now = new Date();
  const input = {
    owner: 1,
    destiny: 'destiny',
    hash: 'hash',
  } as InputCreateUrlDto;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [createUrlUseCase],
      exports: [createUrlUseCase],
    }).compile();

    useCase = app.get<createUrlUseCase>(createUrlUseCase);
  });

  describe('reduce url service', () => {
    it('should contains create url method', () => {
      expect(useCase).toBeDefined();
    });

    it('should create url', async () => {
      const input = {
        owner: 1,
        destiny: 'destiny',
        hash: 'hash',
      } as InputCreateUrlDto;

      const output = await useCase.execute(input);

      expect(output.expires).toBeTruthy();
      expect(output.shortcut).toBeTruthy();
    });

    it('should contains correct expires date', async () => {
      const expires = new Date(
        now.setDate(now.getDate() + useCase.daysToExpire),
      );

      const output = await useCase.execute(input);

      expect(output.expires).toEqual(expires);
    });

    it('should contains incorrect expires date', async () => {
      const expires = new Date(
        now.setDate(now.getDate() + useCase.daysToExpire + 30),
      );

      const output = await useCase.execute(input);

      expect(output.expires).toEqual(expires);
    });
  });
});
