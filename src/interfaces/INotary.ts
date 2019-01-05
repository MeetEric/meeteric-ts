export interface INotaryResult {
    readonly signature : string;
    readonly payload : any;
}

export interface INotary {
    GetSignature(content: any): Promise<INotaryResult>;
}