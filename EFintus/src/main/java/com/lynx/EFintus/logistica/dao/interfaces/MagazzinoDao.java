package com.lynx.EFintus.logistica.dao.interfaces;

import com.lynx.EFintus.logistica.entities.Lavoratore;
import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Prodotto;

import java.util.List;

public interface MagazzinoDao {

    Magazzino getById(int id);

    List<Prodotto> getAllProductInWarehouse(int id_magazzino);

    List<Lavoratore> getAllWorkersInWarehouse(int id_magazzino);
}
