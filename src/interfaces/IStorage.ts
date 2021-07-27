export interface IStorage {
  ReadItem(itemPath: string): Promise<string>;
  Exists(itemPath: string): Promise<boolean>;
  SaveItem(itemPath: string, content: string): Promise<void>;
  GetPath(itemPath: string): string;
  Identifier(): string;
}
