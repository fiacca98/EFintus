export class Magazzino{
    id:number;
    nome: string;
    via: string;
    n_civico: number;
    citta: string;
    cap: string;
    metratura: number;
    altezza: number;
    capacita: number;
    disponibilita: [];
    lavoratori: [];

    public constructor(id:number,nome: string,via: string,n_civico: number,citta: string,cap: string,metratura: number,altezza: number,capacita: number, disponibilita:[], lavoratori:[]){
        this.id=id;
        this.nome=nome;
        this.via=via;
        this.n_civico=n_civico;
        this.citta=citta;
        this.cap=cap;
        this.metratura=metratura;
        this.altezza=altezza;
        this.capacita=capacita;
        this.disponibilita = disponibilita;
        this.lavoratori = lavoratori;
    }
}