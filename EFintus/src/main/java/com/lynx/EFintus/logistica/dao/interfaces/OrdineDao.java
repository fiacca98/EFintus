package com.lynx.EFintus.logistica.dao.interfaces;

import com.lynx.EFintus.logistica.entities.Corriere;
import com.lynx.EFintus.logistica.entities.Ordine;

public interface OrdineDao {
    Ordine getById(int id_ordine);

    Corriere getCourierOfOrder(int id_ordine);
}
