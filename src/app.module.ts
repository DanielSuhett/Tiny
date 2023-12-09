import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from 'src/infrastructure/controllers/controllers.module';
import { Url } from 'src/domain/entities/url.entities';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'src/infrastructure/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.db_host,
      port: parseInt(process.env.db_port),
      username: process.env.db_user,
      password: process.env.db_password,
      database: process.env.db_database,
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
