import { IUrlService } from 'src/domain/adapters/url.interface';
import { Url } from 'src/domain/model/url';
import { IUrlRepository } from 'src/domain/repositories/urlRepository.interface';

export class createTinyUrl {
  constructor(
    private readonly urlRepository: IUrlRepository,
    private readonly urlService: IUrlService,
  ) {}

  async execute(owner: number, destiny: string, length = 5): Promise<any> {
    const url = new Url();
    const now = new Date();

    url.tiny = this.urlService.reduceUrl(destiny, length);

    url.owner = owner;
    url.destiny = destiny;
    url.createdAt = now;
    url.updatedAt = now;

    return this.urlRepository.insertOne(url);
  }
}
