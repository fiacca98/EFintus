package com.lynx.EFintus.commercio.classes;

import java.util.Date;

public class Ordine {

    private int id;
    private Date dataOrdine;
    private int idUtente;
    private String stato;

    public Ordine(int id, Date dataOrdine, int idUtente, String stato) {
        this.id = id;
        this.dataOrdine = dataOrdine;
        this.idUtente = idUtente;
        this.stato = stato;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDataOrdine() {
        return dataOrdine;
    }

    public void setDataOrdine(Date dataOrdine) {
        this.dataOrdine = dataOrdine;
    }

    public int getIdUtente() {
        return idUtente;
    }

    public void setIdUtente(int idUtente) {
        this.idUtente = idUtente;
    }

    public String getStato() {
        return stato;
    }

    public void setStato(String stato) {
        this.stato = stato;
    }
}
