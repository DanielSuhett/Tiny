import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class ReduceDestinyUrlUseCase {
  private readonly enconding = 'hex';
  private readonly algorithm = 'sha256';
  readonly length = 5;

  execute(destiny: string, length = this.length): string {
    const hash = createHash(this.algorithm);

    const value = hash.update(destiny).digest(this.enconding);

    return value.substring(0, length);
  }
}
