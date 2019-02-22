export class Magazzino{
    id_magazzino:number;
    nome: string;
    via: string;
    n_civico: number;
    citta: string;
    cap: string;
    metratura: number;
    altezza: number;
    capacita: number;
    public constructor(id_magazzino:number,nome: string,via: string,n_civico: number,citta: string,cap: string,metratura: number,altezza: number,capacita: number){
        this.id_magazzino=id_magazzino;
        this.nome=nome;
        this.via=via;
        this.n_civico=n_civico;
        this.citta=citta;
        this.cap=cap;
        this.metratura=metratura;
        this.altezza=altezza;
        this.capacita=capacita;
    }
}