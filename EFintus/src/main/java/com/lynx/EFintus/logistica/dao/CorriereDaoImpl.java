package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.CorriereDao;
import com.lynx.EFintus.logistica.entities.Corriere;

import javax.persistence.EntityManager;

public class CorriereDaoImpl implements CorriereDao {
    @Override
    public Corriere getById(int id_corriere) {
        EntityManager em = Em.createEntityManager();
        Corriere corriere = em.find(Corriere.class, id_corriere);
        Em.closeEntityManager(em);
        return corriere;
    }
}
