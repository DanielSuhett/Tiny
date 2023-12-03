import { OutputCreateUrlDto } from 'src/usecases/url/create/create.url.dto';
import { Url } from 'src/domain/model/url';
import { IUrlRepository } from 'src/domain/repositories/url.repository.interface';

export class UrlRepository implements IUrlRepository {
  async insertOne(url: Url): Promise<OutputCreateUrlDto> {
    return {
      expires: new Date(),
      shortcut: url.shortcut,
    };
  }

  async findOne(id: number): Promise<Url> {
    const result = new Url();
    result.id = id;
    return result;
  }

  async findMany(query: string): Promise<Url[]> {
    const result = new Url();
    return [result, result];
  }

  async deleteOne(id: number): Promise<boolean> {
    return true;
  }
}
