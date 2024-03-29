import { OutputCreateUrl } from 'src/usecases/url/create/create.url.dto';
import { Url } from 'src/domain/model/url';

export interface IUrlRepository {
  insertOne(url: Url): Promise<OutputCreateUrl>;
  findOne(id: string): Promise<Url | null>;
  findMany(field: string, value: string | number | boolean): Promise<Url[]>;
  deleteOne(id: number): Promise<boolean>;
}
