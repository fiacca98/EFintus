package com.lynx.EFintus.marketing.dao;

import com.lynx.EFintus.marketing.classes.Utente;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UtenteDao extends GenericDao<Utente> {

    private String TABLE_NAME = "utente";

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }

    @Override
    public String getColumns() {
        return "(nome, cognome, email, pIva)";
    }

    @Override
    public List<Utente> getAll() throws SQLException {
        List<Utente> utenti = new ArrayList<Utente>();
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("SELECT * from" + getTableName());
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            utenti.add(this.fromResultSetToBean(rs));
        }
        con.close();
        return utenti;
    }

    @Override
    public void save(Utente utente) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?,?,?,?)");
        ps.setString(1, utente.getNome());
        ps.setString(2, utente.getCognome());
        ps.setString(3, utente.getEmail());
        ps.setString(4, utente.getPartitaIVA());
        ps.executeUpdate();
        con.close();
    }

    @Override
    public void update(Utente utente) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set nome=?, cognome=?, email=?, pIva=? where id = " + utente.getId());
        ps.setString(1, utente.getNome());
        ps.setString(2, utente.getCognome());
        ps.setString(3, utente.getEmail());
        ps.setString(4, utente.getPartitaIVA());
        con.close();
    }

    @Override
    public void delete(Utente utente) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id = " + utente.getId());
        ps.executeUpdate();
        con.close();
    }

    @Override
    public Utente fromResultSetToBean(ResultSet t) throws SQLException {
        Utente utente = new Utente(t.getInt(1), t.getString(2), t.getString(3), t.getString(4), t.getString(5));
        return utente;
    }
}
