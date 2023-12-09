import { plainToInstance } from 'class-transformer';

import {
  IsEnum,
  IsNumber,
  IsString,
  validateSync,
  ValidationError,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Staging = 'staging',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  env: Environment;

  @IsNumber()
  port: number;

  @IsString()
  db_database: string;

  @IsNumber()
  db_port: number;

  @IsString()
  db_host: string;

  @IsString()
  db_user: string;

  @IsString()
  db_password: string;
}

function errorDev(errors: ValidationError[]) {
  console.error('.env error');
  console.table(
    errors.map((e) => ({
      property: e.property,
      value: e.value,
    })),
  );
  process.exit(1);
}

export function validate(
  config: Record<string, unknown>,
): EnvironmentVariables | null {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
    strictGroups: true,
  });

  if (errors.length > 0) {
    if (process.env.ENV != Environment.Production) {
      errorDev(errors);
      return null;
    }

    throw new Error(errors.toString());
  }

  return validatedConfig;
}
