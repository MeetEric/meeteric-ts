import { IEventBusWriter } from './interfaces';

export class EventBusGroup implements IEventBusWriter {
    private readonly clients: IEventBusWriter[];

    constructor() {
        this.clients = [];
    }

    public Identifier(): string {
        let output: string = "";

        this.clients.forEach(client => {
            if (output) {
                output += "\n";
            }
            output += client.Identifier();
        });

        return output;
    }

    public async SendEvent(contents: any): Promise<void> {
        const promises : Promise<void>[] = [];

        this.clients.forEach(client => {
            promises.push(client.SendEvent(contents));
        });

        await Promise.all(promises);
    }

    public AddEventBus(client: IEventBusWriter) {
        this.clients.push(client);
    }
}