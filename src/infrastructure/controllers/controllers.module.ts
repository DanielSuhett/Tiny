import { Module } from '@nestjs/common';
import { UrlController } from 'src/infrastructure/controllers/url/url.controller';
import { UseCasesModule } from 'src/usecases/usecases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [UrlController],
})
export class ControllersModule {}
