package com.lynx.EFintus.commercio.classes;

public class Utente {

    private int _ID;
    private String _Nome;
    private String _Cognome;
    private String _Email;
    private String _Password;
    private String _Indirizzo;
    private String _Citta;
    private String _CAP;
    private String _Stato;
    private String _Telefono;
    private String _PartitaIVA;

    public Utente(int ID, String Nome, String Cognome, String Email, String Password, String Indirizzo, String Citta,
	    String CAP, String Stato, String Telefono, String PartitaIVA) {
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

    public String get_Cognome() {
	return _Cognome;
    }

    public void set_Cognome(String _Cognome) {
	this._Cognome = _Cognome;
    }

    public String get_Email() {
	return _Email;
    }

    public void set_Email(String _Email) {
	this._Email = _Email;
    }

    public String get_Password() {
	return _Password;
    }

    public void set_Password(String _Password) {
	this._Password = _Password;
    }

    public String get_Indirizzo() {
	return _Indirizzo;
    }

    public void set_Indirizzo(String _Indirizzo) {
	this._Indirizzo = _Indirizzo;
    }

    public String get_Citta() {
	return _Citta;
    }

    public void set_Citta(String _Citta) {
	this._Citta = _Citta;
    }

    public String get_CAP() {
	return _CAP;
    }

    public void set_CAP(String _CAP) {
	this._CAP = _CAP;
    }

    public String get_Stato() {
	return _Stato;
    }

    public void set_Stato(String _Stato) {
	this._Stato = _Stato;
    }

    public String get_Telefono() {
	return _Telefono;
    }

    public void set_Telefono(String _Telefono) {
	this._Telefono = _Telefono;
    }

    public String get_PartitaIVA() {
	return _PartitaIVA;
    }

    public void set_PartitaIVA(String _PartitaIVA) {
	this._PartitaIVA = _PartitaIVA;
    }

}
