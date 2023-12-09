import { Injectable } from '@nestjs/common';
import { IUrlRepository } from 'src/domain/repositories/url.repository.interface';
import {
  InputFindUrl,
  OutputFindUrl,
} from 'src/usecases/url/find/find.url.dto';

@Injectable()
export class FindUrlUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(input: InputFindUrl): Promise<OutputFindUrl | null> {
    if (!input.shortcut) {
      return null;
    }

    return this.urlRepository.findOne(input.shortcut);
  }
}
