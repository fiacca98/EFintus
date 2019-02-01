package com.lynx.EFintus.commercio.classes;

public class Produttore {

    public int _ID;
    public String _nome;
    public String _indirizzo;
    public String _citta;
    public String _cap;
    public String _telefono;
    public String _email;
    public String _descrizione;
    public String _partitaIVA;

    public Produttore(
            int ID,
            String nome,
            String indirizzo,
            String citta,
            String cap,
            String telefono,
            String email,
            String descrizione,
            String partitaIVA) {

        this._ID = ID;
        this._nome = nome;
        this._indirizzo = indirizzo;
        this._citta = citta;
        this._cap = cap;
        this._telefono = telefono;
        this._email = email;
        this._descrizione = descrizione;
        this._partitaIVA = partitaIVA;
    }
}
