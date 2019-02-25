export class Fornitura{
    id_fornitura: number;
    id_fornitore: number;
    id_prodotto: number;
    quantita: number;
    data: string;
    public constructor(id_fornitura:number,id_fornitore,id_prodotto:number,quantita:number,data:string){
        this.id_fornitura=id_fornitore;
        this.id_fornitore=id_fornitore;
        this.id_prodotto=id_prodotto;
        this.quantita=quantita;
    }
}