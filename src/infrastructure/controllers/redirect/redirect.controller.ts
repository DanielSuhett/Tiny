import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Redirect,
  UseInterceptors,
} from '@nestjs/common';
import { FindUrlUseCase } from 'src/usecases/url/find/find.url.usecases';

@Controller()
export class RedirectController {
  constructor(
    @Inject(FindUrlUseCase.name)
    private readonly findUrlUseCase: FindUrlUseCase,
  ) {}

  @UseInterceptors(CacheInterceptor)
  @Get('/:shortcut')
  @Redirect()
  async find(@Param('shortcut') shortcut: string) {
    const url = await this.findUrlUseCase.execute({ shortcut });

    if (!url || !url.destiny) {
      throw new NotFoundException();
    }

    return { url: url.destiny };
  }
}
