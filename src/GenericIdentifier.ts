import { IIdentifier } from './interfaces';

export class GenericIdentifier implements IIdentifier {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    public AsString(): string {
        return this.id;
    }
}