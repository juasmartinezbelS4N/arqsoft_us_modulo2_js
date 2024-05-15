
type NegotiationProcess = 'PENDING' | 'COMPLETED' | 'CANCELED';

export interface Negotiation {

    customer: string;

    process: NegotiationProcess;

    startNegotiation: Date;

    endNegotiation?: Date;

    negotiationValue: number;

}






