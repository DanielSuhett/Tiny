import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUrlDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly destiny: string;
}
