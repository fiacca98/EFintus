package com.lynx.EFintus.logistica.entities.key;

import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Prodotto;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
public class ProdottoMagazzinoKey implements Serializable {

    @ManyToOne(cascade = CascadeType.ALL)
    private Magazzino magazzino;

    @ManyToOne(cascade = CascadeType.ALL)
    private Prodotto prodotto;

    public Magazzino getMagazzino() {
        return magazzino;
    }

    public void setMagazzino(Magazzino magazzino) {
        this.magazzino = magazzino;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }
}
