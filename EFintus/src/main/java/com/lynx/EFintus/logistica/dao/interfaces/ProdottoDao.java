package com.lynx.EFintus.logistica.dao.interfaces;

import com.lynx.EFintus.logistica.entities.Fornitura;
import com.lynx.EFintus.logistica.entities.Magazzino;
import com.lynx.EFintus.logistica.entities.Prodotto;

import java.util.HashMap;
import java.util.List;

public interface ProdottoDao {

    Prodotto getById(int id);

    /***
     *
     * @param id_prodotto the product id that needs to be find
     * @return a list that contains hashMap key: Warehouse value:section of warehouse
     */
    List<HashMap<Magazzino,String>> getProductLocation(int id_prodotto);

    int getProductAvailability(int id_prodotto);

    List<Fornitura> getSuppliesOfProduct(int id_prodotto);
}
