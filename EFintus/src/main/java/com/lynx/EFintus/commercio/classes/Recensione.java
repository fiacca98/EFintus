package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Recensione {

    private int _ID_utente;
    private int _ID_prodotto;
    private int _ID_ordine;
    private String _descrizione;
    private int _voto;
    private Date _data;

    public Recensione(int ID_utente,
                      int ID_prodotto,
                      int ID_ordine,
                      String descrizione,
                      int voto,
                      Date data) {

        this._ID_utente = ID_utente;
        this._ID_prodotto = ID_prodotto;
        this._ID_ordine = ID_ordine;
        this._descrizione = descrizione;
        this._voto = voto;
        this._data = data;
    }

    public int get_ID_utente() {
        return _ID_utente;
    }

    public void set_ID_utente(int _ID_utente) {
        this._ID_utente = _ID_utente;
    }

    public int get_ID_prodotto() {
        return _ID_prodotto;
    }

    public void set_ID_prodotto(int _ID_prodotto) {
        this._ID_prodotto = _ID_prodotto;
    }

    public int get_ID_ordine() {
        return _ID_ordine;
    }

    public void set_ID_ordine(int _ID_ordine) {
        this._ID_ordine = _ID_ordine;
    }

    public String get_descrizione() {
        return _descrizione;
    }

    public void set_descrizione(String _descrizione) {
        this._descrizione = _descrizione;
    }

    public int get_voto() {
        return _voto;
    }

    public void set_voto(int _voto) {
        this._voto = _voto;
    }

    public Date get_data() {
        return _data;
    }

    public void set_data(Date _data) {
        this._data = _data;
    }
}
