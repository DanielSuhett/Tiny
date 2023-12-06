import {
  Body,
  Controller,
  Inject,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateUrlUseCase } from 'src/usecases/url/create/create.url.usecases';
import { ReduceDestinyUrlUseCase } from 'src/usecases/url/reduce/reduce.url.usecases';
import { CreateUrlDto } from 'src/infrastructure/controllers/url/url.dto';
import { InputCreateUrl } from 'src/usecases/url/create/create.url.dto';

@Controller('url')
export class UrlController {
  constructor(
    @Inject(CreateUrlUseCase.name)
    private readonly createUrlUseCase: CreateUrlUseCase,
    @Inject(ReduceDestinyUrlUseCase.name)
    private readonly reduceDestinyUrlUseCase: ReduceDestinyUrlUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateUrlDto) {
    const { destiny, owner } = body;

    const hash = this.reduceDestinyUrlUseCase.execute(destiny);

    if (!hash) {
      throw new InternalServerErrorException();
    }

    return await this.createUrlUseCase.execute({
      destiny,
      owner,
      hash,
    } as InputCreateUrl);
  }
}
