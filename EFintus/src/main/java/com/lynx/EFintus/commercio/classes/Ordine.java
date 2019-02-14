package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Ordine {

    private int _Id;
    private Date _Data_ordine;
    private int _Id_utente;
    private String _Stato;

    public Ordine(int Id, Date Data_ordine, int Id_utente, String Stato) {

	this._Id = Id;
	this._Data_ordine = Data_ordine;
	this._Id_utente = Id_utente;
	this._Stato = Stato;
    }

    public int get_Id() {
	return _Id;
    }

    public void set_Id(int _Id) {
	this._Id = _Id;
    }

    public Date get_Data_ordine() {
	return _Data_ordine;
    }

    public void set_Data_ordine(Date _Data_ordine) {
	this._Data_ordine = _Data_ordine;
    }

    public int get_Id_utente() {
	return _Id_utente;
    }

    public void set_Id_utente(int _Id_utente) {
	this._Id_utente = _Id_utente;
    }

    public String get_Stato() {
	return _Stato;
    }

    public void set_Stato(String _Stato) {
	this._Stato = _Stato;
    }

}
