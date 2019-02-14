package com.lynx.EFintus.commercio.classes;

public class Utente {

    public int _ID;
    public String _Nome;
    public String _Cognome;
    public String _Email;
    public String _Password;
    public String _Indirizzo;
    public String _Citta;
    public String _CAP;
    public String _Stato;
    public String _Telefono;
    public String _PartitaIVA;

    public Utente(int ID,
                  String Nome,
                  String Cognome,
                  String Email,
                  String Password,
                  String Indirizzo,
                  String Citta,
                  String CAP,
                  String Stato,
                  String Telefono,
                  String PartitaIVA) {
        this._ID = ID;
        this._Nome = Nome;
        this._Cognome = Cognome;
        this._Email = Email;
        this._Password = Password;
        this._Indirizzo = Indirizzo;
        this._Citta = Citta;
        this._CAP = CAP;
        this._Stato = Stato;
        this._Telefono = Telefono;
        this._PartitaIVA = PartitaIVA;
    }
}
