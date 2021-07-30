import winston = require('winston');
import {IEventBusWriter} from '../interfaces';

export class ConsoleEventBus implements IEventBusWriter {
  private readonly identifier: string;

  constructor() {
    this.identifier = 'Console Event Bus';
  }

  public Identifier(): string {
    return this.identifier;
  }

  public SendEvent<T>(content: T): Promise<void> {
    winston.info(JSON.stringify(content));
    return new Promise<void>(resolve => resolve());
  }
}
