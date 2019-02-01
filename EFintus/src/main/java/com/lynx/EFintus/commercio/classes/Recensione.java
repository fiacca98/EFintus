package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Recensione {

    public int _ID_utente;
    public int _ID_prodotto;
    public int _ID_ordine;
    public String _descrizione;
    public int _voto;
    public Date _data;

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
}
