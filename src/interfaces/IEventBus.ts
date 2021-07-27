export interface IEventBusWriter {
  Identifier(): string;
  SendEvent<T>(contents: T): Promise<void>;
}

export interface IEventBusReader {
  Identifier(): string;
  ReadMessageAndDelete<T>(): Promise<T>;
  ReadMessageWithLock<T>(): Promise<T>;
  ReleaseAndDeleteMessage<T>(lockedMessage: T): Promise<void>;
}
