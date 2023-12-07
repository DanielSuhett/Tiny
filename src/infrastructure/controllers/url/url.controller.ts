import {
  Body,
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUrlUseCase } from 'src/usecases/url/create/create.url.usecases';
import { ReduceDestinyUrlUseCase } from 'src/usecases/url/reduce/reduce.url.usecases';
import { CreateUrlDto } from 'src/infrastructure/controllers/url/url.dto';
import { InputCreateUrl } from 'src/usecases/url/create/create.url.dto';
import { FindUrlUseCase } from 'src/usecases/url/find/find.url.usecases';

@Controller('url')
export class UrlController {
  constructor(
    @Inject(CreateUrlUseCase.name)
    private readonly createUrlUseCase: CreateUrlUseCase,
    @Inject(ReduceDestinyUrlUseCase.name)
    private readonly reduceDestinyUrlUseCase: ReduceDestinyUrlUseCase,
    @Inject(FindUrlUseCase.name)
    private readonly findUrlUseCase: FindUrlUseCase,
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

  @Get('/:id')
  async find(@Param('id', ParseIntPipe) id: number) {
    const url = await this.findUrlUseCase.execute({ id });

    if (!url) {
      throw new NotFoundException();
    }

    return url;
  }
}
