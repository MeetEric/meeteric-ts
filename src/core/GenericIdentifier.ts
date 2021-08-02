import {IIdentifier} from '../interfaces';

export class GenericIdentifier implements IIdentifier {
  private readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  public AsString(): string {
    return this.id;
  }
}

export class Identifiers {
  public static AreEqualCaseSensitive(
    ida: IIdentifier,
    idb: IIdentifier
  ): boolean {
    return ida.AsString() === idb.AsString();
  }

  public static AreEqualCaseInsensitive(
    ida: IIdentifier,
    idb: IIdentifier
  ): boolean {
    return ida.AsString().toLowerCase() === idb.AsString().toLowerCase();
  }
}
