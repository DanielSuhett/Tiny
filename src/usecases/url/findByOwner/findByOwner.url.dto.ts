import { Url } from 'src/domain/model/url';

export type OutputFindUrlByOwner = Url[];

export interface InputFindUrlByOwner {
  owner: number;
}
