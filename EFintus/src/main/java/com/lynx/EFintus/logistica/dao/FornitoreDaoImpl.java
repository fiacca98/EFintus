package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.FornitoreDao;
import com.lynx.EFintus.logistica.entities.Fornitore;
import com.lynx.EFintus.logistica.entities.Fornitura;

import javax.persistence.EntityManager;
import java.util.List;

public class FornitoreDaoImpl implements FornitoreDao {
    @Override
    public Fornitore getById(int id_fornitore) {
        EntityManager em = Em.createEntityManager();
        Fornitore magazzino = em.find(Fornitore.class, id_fornitore);
        Em.closeEntityManager(em);
        return magazzino;
    }

    @Override
    public List<Fornitura> getSuppliesFromSupplier(int id_fornitore) {
        Fornitore fornitore = getById(id_fornitore);
        if (fornitore != null && fornitore.getForniture() != null) {
            return  fornitore.getForniture();
        }
        return null;
    }
}
