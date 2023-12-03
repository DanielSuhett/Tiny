export interface InputCreateUrlDto {
  owner: number;
  destiny: string;
  hash: string;
}

export interface OutputCreateUrlDto {
  shortcut: string;
  expires: Date;
}
