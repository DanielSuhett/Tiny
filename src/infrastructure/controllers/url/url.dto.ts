import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUrlDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  readonly owner: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly destiny: string;
}
