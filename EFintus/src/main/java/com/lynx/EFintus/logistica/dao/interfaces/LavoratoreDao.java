package com.lynx.EFintus.logistica.dao.interfaces;

import com.lynx.EFintus.logistica.entities.Lavoratore;
import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Permesso;

import java.util.List;

public interface LavoratoreDao {
    Lavoratore getById(String codice_fiscale);

    Magazzino getWorkerWarehouse(String codice_fiscale);

    List<Permesso> getWorkerAuthorization(String codice_fiscale);
}
