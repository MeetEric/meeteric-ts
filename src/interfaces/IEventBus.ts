export interface IEventBusWriter {
    Identifier(): string;
    SendEvent(contents: any): Promise<void>;
}

export interface IEventBusReader {
    Identifier(): string;
    ReadMessageAndDelete() : Promise<any>;
    ReadMessageWithLock() : Promise<any>;
    ReleaseAndDeleteMessage(lockedMessage: any) : Promise<void>;
}