package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Prodotto {

    public int _ID;
    public String _Nome;
    public int _ID_Produttore;
    public float _Prezzo;
    public int _ID_Categorie;
    public String _Descrizione;
    public String _Misure;
    public float _Peso;
    public String _Colore;
    public String _Path_Immagini;
    public Date _DataInizioValidita;
    public Date _DateFineValidita;

    public Prodotto(int ID,
                    String Nome,
                    int ID_Produttore,
                    float Prezzo,
                    int ID_Categorie,
                    String Descrizione,
                    String Misure,
                    float Peso,
                    String Colore,
                    String Path_Immagini,
                    Date DataInizioValidita,
                    Date DateFineValidita) {

        this._ID = ID;
        this._Nome = Nome;
        this._ID_Produttore = ID_Produttore;
        this._Prezzo = Prezzo;
        this._ID_Categorie = ID_Categorie;
        this._Descrizione = Descrizione;
        this._Misure = Misure;
        this._Peso = Peso;
        this._Colore = Colore;
        this._Path_Immagini = Path_Immagini;
        this._DataInizioValidita = DataInizioValidita;
        this._DateFineValidita = DateFineValidita;
    }
}
