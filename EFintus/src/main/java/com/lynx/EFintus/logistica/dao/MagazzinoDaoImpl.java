package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.MagazzinoDao;
import com.lynx.EFintus.logistica.entities.Disponibilita;
import com.lynx.EFintus.logistica.entities.Lavoratore;
import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Prodotto;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

public class MagazzinoDaoImpl implements MagazzinoDao {
    @Override
    public Magazzino getById(int id) {
        EntityManager em = Em.createEntityManager();
        Magazzino magazzino = em.find(Magazzino.class, id);
        Em.closeEntityManager(em);
        return magazzino;
    }

    @Override
    public List<Prodotto> getAllProductInWarehouse(int id_magazzino) {
        Magazzino magazzino = getById(id_magazzino);
        if (magazzino != null && magazzino.getDisponibilita() != null) {
            List<Prodotto> prodotti = new ArrayList<>();
            for (Disponibilita disponibilita : magazzino.getDisponibilita()) {
                if (disponibilita.getProdotto() != null) {
                    prodotti.add(disponibilita.getProdotto());
                }
            }
            if (prodotti.size() > 0) {
                return prodotti;
            }

        }
        return null;
    }


    @Override
    public List<Lavoratore> getAllWorkersInWarehouse(int id_magazzino) {
        Magazzino magazzino = getById(id_magazzino);
        if (magazzino != null && magazzino.getLavoratori() != null) {
            return magazzino.getLavoratori();
        }
        return null;
    }


}
