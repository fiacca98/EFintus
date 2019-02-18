package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.PermessoDao;
import com.lynx.EFintus.logistica.entities.Permesso;

import javax.persistence.EntityManager;

public class PemessoDaoImpl implements PermessoDao {
    @Override
    public Permesso getById(int id) {
        EntityManager em = Em.createEntityManager();
        Permesso permesso = em.find(Permesso.class, id);
        Em.closeEntityManager(em);
        return permesso;
    }
}
