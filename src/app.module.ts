import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from 'src/infrastructure/controllers/controllers.module';
import { Url } from './domain/entities/url.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'danielsuhett',
      password: 'daniel',
      database: 'danielsuhett',
      entities: [Url],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
