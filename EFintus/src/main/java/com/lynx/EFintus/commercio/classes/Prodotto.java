package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Prodotto {

    private int _ID;
    private String _Nome;
    private int _ID_Produttore;
    private float _Prezzo;
    private int _ID_Categorie;
    private String _Descrizione;
    private String _Misure;
    private float _Peso;
    private String _Colore;
    private String _Path_Immagini;
    private Date _DataInizioValidita;
    private Date _DateFineValidita;

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

    public int get_ID() {
        return _ID;
    }

    public void set_ID(int _ID) {
        this._ID = _ID;
    }

    public String get_Nome() {
        return _Nome;
    }

    public void set_Nome(String _Nome) {
        this._Nome = _Nome;
    }

    public int get_ID_Produttore() {
        return _ID_Produttore;
    }

    public void set_ID_Produttore(int _ID_Produttore) {
        this._ID_Produttore = _ID_Produttore;
    }

    public float get_Prezzo() {
        return _Prezzo;
    }

    public void set_Prezzo(float _Prezzo) {
        this._Prezzo = _Prezzo;
    }

    public int get_ID_Categorie() {
        return _ID_Categorie;
    }

    public void set_ID_Categorie(int _ID_Categorie) {
        this._ID_Categorie = _ID_Categorie;
    }

    public String get_Descrizione() {
        return _Descrizione;
    }

    public void set_Descrizione(String _Descrizione) {
        this._Descrizione = _Descrizione;
    }

    public String get_Misure() {
        return _Misure;
    }

    public void set_Misure(String _Misure) {
        this._Misure = _Misure;
    }

    public float get_Peso() {
        return _Peso;
    }

    public void set_Peso(float _Peso) {
        this._Peso = _Peso;
    }

    public String get_Colore() {
        return _Colore;
    }

    public void set_Colore(String _Colore) {
        this._Colore = _Colore;
    }

    public String get_Path_Immagini() {
        return _Path_Immagini;
    }

    public void set_Path_Immagini(String _Path_Immagini) {
        this._Path_Immagini = _Path_Immagini;
    }

    public Date get_DataInizioValidita() {
        return _DataInizioValidita;
    }

    public void set_DataInizioValidita(Date _DataInizioValidita) {
        this._DataInizioValidita = _DataInizioValidita;
    }

    public Date get_DateFineValidita() {
        return _DateFineValidita;
    }

    public void set_DateFineValidita(Date _DateFineValidita) {
        this._DateFineValidita = _DateFineValidita;
    }
}
