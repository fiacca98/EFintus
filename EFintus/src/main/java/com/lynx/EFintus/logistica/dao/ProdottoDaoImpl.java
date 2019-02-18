package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.ProdottoDao;
import com.lynx.EFintus.logistica.entities.Disponibilita;
import com.lynx.EFintus.logistica.entities.Fornitura;
import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Prodotto;

import javax.persistence.EntityManager;
import java.util.HashMap;
import java.util.List;

public class ProdottoDaoImpl implements ProdottoDao {
    @Override
    public Prodotto getById(int id) {
        EntityManager em = Em.createEntityManager();
        Prodotto prodotto = em.find(Prodotto.class, id);
        Em.closeEntityManager(em);
        return prodotto;
    }

    @Override
    public HashMap<Magazzino, Character> getProductLocation(int id_prodotto) {
        Prodotto prodotto = getById(id_prodotto);
        if (prodotto != null && prodotto.getDisponibilita() != null) {
            HashMap<Magazzino, Character> locations = new HashMap<>();
            for (Disponibilita disponibilita : prodotto.getDisponibilita()) {
                locations.put(disponibilita.getMagazzino(), disponibilita.getSezione());
            }
            if (locations.size() > 0) {
                return locations;
            }
        }
        return null;
    }

    @Override
    public int getProductAvailability(int id_prodotto) {
        Prodotto prodotto = getById(id_prodotto);
        if (prodotto != null && prodotto.getDisponibilita() != null) {
            int quantita = 0;
            for (Disponibilita disponibilita : prodotto.getDisponibilita()) {
                quantita += disponibilita.getQuantita();
            }
            return quantita;
        }
        return 0;
    }

    @Override
    public List<Fornitura> getSuppliesOfProduct(int id_prodotto) {
        Prodotto prodotto = getById(id_prodotto);
        if (prodotto != null && prodotto.getForniture() != null) {
            return prodotto.getForniture();
        }
        return  null;
    }
}
