package com.lynx.EFintus.logistica.dao.interfaces;

import com.lynx.EFintus.logistica.entities.Fornitore;
import com.lynx.EFintus.logistica.entities.Fornitura;

import java.util.List;

public interface FornitoreDao {
    Fornitore getById(int id_fornitore);

    List<Fornitura> getSuppliesFromSupplier(int id_fornitore);
}
