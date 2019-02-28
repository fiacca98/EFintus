export class Ordine {
    id: number;
    corriere: number;
    id_trasporto: number;
    stato: string;

    public constructor(id_ordine: number,
        id_corriere: number,
        id_trasporto: number,
        state: string,) {
        this.id = id_ordine;
        this.id_trasporto = id_trasporto;
        this.corriere = id_corriere;
        this.stato = state;
    }
}