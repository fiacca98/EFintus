package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.OrdineDao;
import com.lynx.EFintus.logistica.entities.Corriere;
import com.lynx.EFintus.logistica.entities.Ordine;

import javax.persistence.EntityManager;

public class OrdineDaoImpl implements OrdineDao {
    @Override
    public Ordine getById(int id_ordine) {
        EntityManager em = Em.createEntityManager();
        Ordine ordine = em.find(Ordine.class, id_ordine);
        Em.closeEntityManager(em);
        return ordine;
    }

    @Override
    public Corriere getCourierOfOrder(int id_ordine) {
        Ordine ordine = getById(id_ordine);
        if (ordine != null) {
            return ordine.getCorriere();
        }
        return null;
    }
}
