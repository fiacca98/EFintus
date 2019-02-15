package com.lynx.EFintus.marketing.dao;

import com.lynx.EFintus.marketing.classes.Categoria;
import com.lynx.EFintus.marketing.classes.Recensione;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class RecensioneDao extends GenericDao<Recensione> {

    private String TABLE_NAME = "recensione";


    @Override
    public String getTableName() {
        return TABLE_NAME;
    }

    @Override
    public String getColumns() {
        return ("idProdotto, valutazione, commento)");
    }

    public List<Recensione> getRecensioneForProduct(int id) throws SQLException {
        List<Recensione> recensione = new ArrayList<Recensione>();
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + " where id =" + id);
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            recensione.add(this.fromResultSetToBean(rs));
        }
        con.close();
        return recensione;
    }

    @Override
    public List<Recensione> getAll() throws SQLException {
        List<Recensione> recensione = new ArrayList<Recensione>();

        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName());

        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            recensione.add(this.fromResultSetToBean(rs));
        }
        con.close();
        return recensione;
    }

    @Override
    public void save(Recensione recensione) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?,?,?)");
        ps.setInt(1, recensione.getIdProdotto());
        ps.setInt(2, recensione.getVoto());
        ps.setString(3, recensione.getDescrizione());

        ps.executeUpdate();

        con.close();
    }

    @Override
    public void update(Recensione recensione) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set idProdotto=?, valutazione=?, commento=? WHERE id=?");
        ps.setInt(1, recensione.getIdProdotto());
        ps.setInt(2, recensione.getVoto());
        ps.setString(3, recensione.getDescrizione());
        ps.setInt(4, recensione.getIdRecensione());
        ps.executeUpdate();

        con.close();
    }

    @Override
    public void delete(Recensione recensione) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id=?" );
        ps.setInt(1, recensione.getIdRecensione());
        ps.executeUpdate();
        con.close();
    }

    @Override
    public Recensione fromResultSetToBean(ResultSet t) throws SQLException {
        Recensione rec =  new Recensione(t.getInt(1), t.getInt(2), t.getString(3), t.getInt(4));
        return rec;
    }
}
