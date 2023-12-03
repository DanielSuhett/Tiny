import { OutputCreateUrlDto } from 'src/usecases/url/create/create.url.dto';
import { Url } from 'src/domain/model/url';

export interface IUrlRepository {
  insertOne(url: Url): Promise<OutputCreateUrlDto>;
  findOne(id: number): Promise<Url>;
  findMany(query: string): Promise<Url[]>;
  deleteOne(id: number): Promise<boolean>;
  deleteMany(id: number): Promise<boolean>;
}
