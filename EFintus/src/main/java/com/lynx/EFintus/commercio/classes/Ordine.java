package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Ordine {

    public int _Id;
    public Date _Data_ordine;
    public int _Id_utente;
    public String _Stato;

    public Ordine(int Id,
                  Date Data_ordine,
                  int Id_utente,
                  String Stato) {

        this._Id = Id;
        this._Data_ordine = Data_ordine;
        this._Id_utente = Id_utente;
        this._Stato = Stato;
    }
}
