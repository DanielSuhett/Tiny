import { Url } from 'src/domain/model/url';
import { IUrlRepository } from 'src/domain/repositories/urlRepository.interface';
import {
  InputCreateUrlDto,
  OutputCreateUrlDto,
} from 'src/usecases/url/create/create.url.dto';

export class createUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  readonly daysToExpire = 1;

  async execute(input: InputCreateUrlDto): Promise<OutputCreateUrlDto> {
    const url = new Url();
    const now = new Date();
    const expires = new Date(now.setDate(now.getDate() + this.daysToExpire));

    url.owner = input.owner;
    url.destiny = input.destiny;
    url.shortcut = input.hash;
    url.expires = expires;
    url.createdAt = now;
    url.updatedAt = now;

    return this.urlRepository.insertOne(url);
  }
}
