import { InputCreateUrl } from 'src/usecases/url/create/create.url.dto';
import {
  InputFindUrl,
  OutputFindUrl,
} from 'src/usecases/url/find/find.url.dto';
import {
  InputFindUrlByOwner,
  OutputFindUrlByOwner,
} from 'src/usecases/url/findByOwner/findByOwner.url.dto';

export const InputCreateUrlMock: InputCreateUrl = {
  owner: 1,
  destiny: 'destiny',
  hash: 'hash',
};

export const InputFindUrlMock: InputFindUrl = {
  id: 1,
};

export const OutputFindUrlMock: OutputFindUrl = {
  id: 1,
  owner: 1,
  destiny: 'destiny',
  shortcut: 'shortcut',
  createdAt: new Date(),
  expiresAt: new Date(),
  updatedAt: new Date(),
};

export const InputFindByOwnerUrlMock: InputFindUrlByOwner = {
  owner: 1,
};

export const OutputFindByOwnerUrlMock: OutputFindUrlByOwner = [
  { ...OutputFindUrlMock, id: 0 },
  { ...OutputFindUrlMock, id: 1 },
];
