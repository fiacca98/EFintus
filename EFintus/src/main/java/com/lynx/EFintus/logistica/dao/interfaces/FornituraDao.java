package com.lynx.EFintus.logistica.dao.interfaces;

import com.lynx.EFintus.logistica.entities.Fornitura;

import java.sql.Date;
import java.util.List;

public interface FornituraDao {
    Fornitura getById(int id);

    List<Fornitura> getSuppliesByDate(Date date);
}
