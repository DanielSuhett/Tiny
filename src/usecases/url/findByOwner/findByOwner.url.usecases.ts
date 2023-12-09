import { Injectable } from '@nestjs/common';
import { IUrlRepository } from 'src/domain/repositories/url.repository.interface';
import {
  InputFindUrlByOwner,
  OutputFindUrlByOwner,
} from 'src/usecases/url/findByOwner/findByOwner.url.dto';

@Injectable()
export class FindUrlByOwnerUseCase {
  constructor(private readonly urlRepository: IUrlRepository) {}

  async execute(
    input: InputFindUrlByOwner,
  ): Promise<OutputFindUrlByOwner | null> {
    if (!input.owner) {
      return null;
    }

    return this.urlRepository.findMany('owner', input.owner);
  }
}
