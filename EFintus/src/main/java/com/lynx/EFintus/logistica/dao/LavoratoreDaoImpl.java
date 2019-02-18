package com.lynx.EFintus.logistica.dao;

import com.lynx.EFintus.logistica.Utility.Em;
import com.lynx.EFintus.logistica.dao.interfaces.LavoratoreDao;
import com.lynx.EFintus.logistica.entities.Lavoratore;
import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Permesso;

import javax.persistence.EntityManager;
import java.util.List;

public class LavoratoreDaoImpl implements LavoratoreDao {
    @Override
    public Lavoratore getById(String codice_fiscale) {
        EntityManager em = Em.createEntityManager();
        Lavoratore lavoratore = em.find(Lavoratore.class, codice_fiscale);
        Em.closeEntityManager(em);
        return lavoratore;
    }

    @Override
    public Magazzino getWorkerWarehouse(String codice_fiscale) {
        Lavoratore lavoratore = getById(codice_fiscale);
        if (lavoratore != null) {
            return lavoratore.getMagazzino();
        }
        return null;
    }

    @Override
    public List<Permesso> getWorkerAuthorization(String codice_fiscale) {
        Lavoratore lavoratore = getById(codice_fiscale);
        if(lavoratore != null){
            return lavoratore.getPermessi();
        }
        return null;
    }
}
