package com.lynx.EFintus.commercio.classes;

public class WishList {

    private int _id;
    private int _utente;
    private String _nome;

    public WishList(int Id, int utente, String nome) {
        this._id = Id;
        this._utente = utente;
        this._nome = nome;
    }

    public int get_id() {
        return _id;
    }

    public void set_id(int _id) {
        this._id = _id;
    }

    public int get_utente() {
        return _utente;
    }

    public void set_utente(int _utente) {
        this._utente = _utente;
    }

    public String get_nome() {
        return _nome;
    }

    public void set_nome(String _nome) {
        this._nome = _nome;
    }
}
