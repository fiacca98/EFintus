package com.lynx.EFintus.commercio.classes;

public class Produttore {

    public int _ID;

    public int get_ID() {
        return _ID;
    }

    public void set_ID(int _ID) {
        this._ID = _ID;
    }

    public String get_nome() {
        return _nome;
    }

    public void set_nome(String _nome) {
        this._nome = _nome;
    }

    public String get_indirizzo() {
        return _indirizzo;
    }

    public void set_indirizzo(String _indirizzo) {
        this._indirizzo = _indirizzo;
    }

    public String get_citta() {
        return _citta;
    }

    public void set_citta(String _citta) {
        this._citta = _citta;
    }

    public String get_cap() {
        return _cap;
    }

    public void set_cap(String _cap) {
        this._cap = _cap;
    }

    public String get_telefono() {
        return _telefono;
    }

    public void set_telefono(String _telefono) {
        this._telefono = _telefono;
    }

    public String get_email() {
        return _email;
    }

    public void set_email(String _email) {
        this._email = _email;
    }

    public String get_descrizione() {
        return _descrizione;
    }

    public void set_descrizione(String _descrizione) {
        this._descrizione = _descrizione;
    }

    public String get_partitaIVA() {
        return _partitaIVA;
    }

    public void set_partitaIVA(String _partitaIVA) {
        this._partitaIVA = _partitaIVA;
    }

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
