package com.lynx.EFintus.marketing.classes;

public class Utente {

    private int id;
    private String nome;
    private String cognome;
    private String email;
    private String password;
    private String indirizzo;
    private String citta;
    private String CAP;
    private String stato;
    private String telefono;
    private String partitaIVA;

    public Utente(int id, String nome, String cognome, String email, String password, String indirizzo, String citta,
	    String CAP, String stato, String telefono, String partitaIVA) {
	this.id = id;
	this.nome = nome;
	this.cognome = cognome;
	this.email = email;
	this.password = password;
	this.indirizzo = indirizzo;
	this.citta = citta;
	this.CAP = CAP;
	this.stato = stato;
	this.telefono = telefono;
	this.partitaIVA = partitaIVA;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public String getCAP() {
		return CAP;
	}

	public void setCAP(String cAP) {
		CAP = cAP;
	}

	public String getStato() {
		return stato;
	}

	public void setStato(String stato) {
		this.stato = stato;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getPartitaIVA() {
		return partitaIVA;
	}

	public void setPartitaIVA(String partitaIVA) {
		this.partitaIVA = partitaIVA;
	}
}