import { Module } from '@nestjs/common';
import { UrlController } from 'src/infrastructure/controllers/url/url.controller';
import { UseCasesModule } from 'src/usecases/usecases.module';
import { RedirectController } from 'src/infrastructure/controllers/redirect/redirect.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [UrlController, RedirectController],
})
export class ControllersModule {}
