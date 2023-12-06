export interface InputCreateUrl {
  owner: number;
  destiny: string;
  hash: string;
}

export interface OutputCreateUrl {
  shortcut: string;
  expiresAt: Date;
}
