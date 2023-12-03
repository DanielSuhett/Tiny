import { Test, TestingModule } from '@nestjs/testing';
import { ReduceDestinyUrlUseCase } from './reduce.url.usecases';

describe('reduceDestinyUrlUseCase', () => {
  let useCase: ReduceDestinyUrlUseCase;
  const url = ReduceDestinyUrlUseCase.name;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ReduceDestinyUrlUseCase],
      exports: [ReduceDestinyUrlUseCase],
    }).compile();

    useCase = app.get<ReduceDestinyUrlUseCase>(ReduceDestinyUrlUseCase);
  });

  it('should contains reduce url method', () => {
    expect(useCase).toBeDefined();
  });

  it('should contains a length by default', () => {
    expect(useCase.length).toBeDefined();
    expect(useCase.length).toBeGreaterThan(0);
  });
  it('should contains correct hash length', () => {
    const hash = useCase.execute(url);
    expect(hash).toHaveLength(useCase.length);
  });

  it('should contains incorrect hash', () => {
    const hash = useCase.execute(url);
    expect(hash).not.toHaveLength(useCase.length + 1);
  });
});
