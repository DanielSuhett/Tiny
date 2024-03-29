import { Injectable } from '@nestjs/common';
import { Url } from 'src/domain/model/url';
import { IUrlRepository } from 'src/domain/repositories/url.repository.interface';
import {
  InputCreateUrl,
  OutputCreateUrl,
} from 'src/usecases/url/create/create.url.dto';

@Injectable()
export class CreateUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  readonly daysToExpire = 1;

  async execute(input: InputCreateUrl): Promise<OutputCreateUrl> {
    const url = new Url();
    const now = new Date();
    const expires = new Date(
      new Date().setDate(now.getDate() + this.daysToExpire),
    );

    url.destiny = input.destiny;
    url.shortcut = input.hash;
    url.expiresAt = expires;
    url.createdAt = now;
    url.updatedAt = now;

    const created = await this.urlRepository.insertOne(url);

    if (!created) {
      throw new Error('Fail to create shortcut');
    }

    return {
      expiresAt: url.expiresAt,
      shortcut: url.shortcut,
    };
  }
}
