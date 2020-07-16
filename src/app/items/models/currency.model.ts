
export class Currency {
    base: string;
    date: Date;
    rates: Rates
}

export interface Rates {
        ILS: number
        USD: number;
}