package com.lynx.EFintus.commercio.dao;

import com.lynx.EFintus.commercio.classes.Utente;
import com.lynx.EFintus.commercio.interfaces.Dao;

import java.util.List;
import java.util.Optional;

public class UtenteDao implements Dao<Utente> {

    @Override
    public Optional<Utente> get(long id) {
        return Optional.empty();
    }

    @Override
    public List<Utente> getAll() {
        return null;
    }

    @Override
    public void save(Utente utente) {

    }

    @Override
    public void update(Utente utente, String[] params) {

    }

    @Override
    public void delete(Utente utente) {

    }
}
