import { Url } from '../model/url';

export interface IUrlRepository {
  insertOne(url: Url): Promise<boolean>;
  findOne(id: number): Promise<Url>;
  findMany(query: string): Promise<Url[]>;
  deleteOne(id: number): Promise<boolean>;
  deleteMany(id: number): Promise<boolean>;
}
