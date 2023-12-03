import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

import { IUrlService } from 'src/domain/adapters/url.interface';

@Injectable()
export class UrlService implements IUrlService {
  reduceUrl(destiny: string, length: number): string {
    const hash = createHash('sha256');

    const value = hash.update(destiny).digest('hex');

    return value.substring(0, length);
  }
}
