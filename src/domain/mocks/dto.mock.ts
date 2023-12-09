import { InputCreateUrl } from 'src/usecases/url/create/create.url.dto';
import {
  InputFindUrl,
  OutputFindUrl,
} from 'src/usecases/url/find/find.url.dto';

export const InputCreateUrlMock: InputCreateUrl = {
  destiny: 'destiny',
  hash: 'hash',
};

export const InputFindUrlMock: InputFindUrl = {
  shortcut: '1',
};

export const OutputFindUrlMock: OutputFindUrl = {
  id: 1,
  destiny: 'destiny',
  shortcut: 'shortcut',
  createdAt: new Date(),
  expiresAt: new Date(),
  updatedAt: new Date(),
};
