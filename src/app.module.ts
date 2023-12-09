import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from 'src/infrastructure/controllers/controllers.module';
import { Url } from './domain/entities/url.entities';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
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
    CacheModule.register({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
