export class Ordine {
    id_ordine: number;
    id_corriere: number;
    id_trasporto: number;
    date: string;
    state: string;
    quantity: number;

    public constructor(id_ordine: number,
        id_corriere: number,
        id_trasporto: number,
        date: string,
        state: string,
        quantity: number) {
        this.id_ordine = id_ordine;
        this.id_trasporto = id_trasporto;
        this.id_corriere = id_corriere;
        this.date = date;
        this.state = state;
        this.quantity = quantity;
    }
}