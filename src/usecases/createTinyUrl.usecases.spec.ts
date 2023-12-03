import { IUrlService } from 'src/domain/adapters/url.interface';
import { IUrlRepository } from 'src/domain/repositories/urlRepository.interface';
import { createTinyUrlUseCase } from './createTinyUrl.usecases';

describe(createTinyUrlUseCase.name, () => {
  describe('reduce url service', () => {
    const url = createTinyUrlUseCase.name;
    let length = 5;
    const urlService = {} as IUrlService;
    const urlRepository = {} as IUrlRepository;

    it('should contains reduce url method', () => {
      expect(createTinyUrlUseCase).toBeDefined();
    });

    it('should execute usecase', () => {
      const usecase = new createTinyUrlUseCase(urlRepository, urlService);

      expect(usecase.execute).toHaveBeenCalled();
    });

    it('should contains incorrect hash', () => {
      const urlHash = urlService.reduceUrl(url, length);
      expect(urlHash).not.toHaveLength(length++);
    });
  });
});
