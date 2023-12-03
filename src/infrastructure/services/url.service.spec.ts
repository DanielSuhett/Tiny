import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let urlService: UrlService;
  const url = UrlService.name;
  let length = 5;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [UrlService],
      exports: [UrlService],
    }).compile();

    urlService = app.get<UrlService>(UrlService);
  });

  describe('reduce url service', () => {
    it('should contains reduce url method', () => {
      expect(urlService.reduceUrl).toBeDefined();
    });

    it('should contains correct hash', () => {
      const urlHash = urlService.reduceUrl(url, length);

      expect(urlHash).toHaveLength(length);
    });

    it('should contains incorrect hash', () => {
      const urlHash = urlService.reduceUrl(url, length);
      expect(urlHash).not.toHaveLength(length++);
    });
  });
});
