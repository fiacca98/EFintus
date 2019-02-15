package com.lynx.EFintus.marketing.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.marketing.classes.Prodotto;

public class ProdottoDao extends GenericDao<Prodotto> {

    private String TABLE_NAME = "prodotto";

    public Prodotto getById(int id) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + " where idProdotto = ?");
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();
        con.close();
        return fromResultSetToBean(rs);

    }

    @Override
    public List<Prodotto> getAll() throws SQLException {
        List<Prodotto> products = new ArrayList<Prodotto>();

        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            products.add(this.fromResultSetToBean(rs));
        }

        con.close();

        return products;

    }

    @Override
    public void save(Prodotto products) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con
                .prepareStatement("insert into " + getTableAndColumns() + " values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)");

        ps.setString( 1, products.getNome());
        ps.setInt( 2, products.getIdProduttore());
        ps.setFloat( 3, products.getPrezzo());
        ps.setInt( 4, products.getIdCategorie());
        ps.setString( 5, products.getDescrizione());
        ps.setString( 6, products.getMisure());
        ps.setFloat( 7, products.getPeso());
        ps.setString( 8, products.getColore());
        ps.setString( 9, products.getPathImmagini());
        ps.setDate( 10, products.getDataInizioValidita());
        ps.setDate( 11, products.getDateFineValidita());

        int status = ps.executeUpdate();

        con.close();
    }

    @Override
    public void update(Prodotto products) throws SQLException {

        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set nome = ?, idProduttore = ?, prezzo = ?, idCategorie = ?, descrizione = ?, misure = ?, peso = ?, colore = ?, pathImmagini = ?, dataInizioValidita = ?, dataFineValidita = ? WHERE idProdotto=?");
        ps.setString( 1, products.getNome());
        ps.setInt( 2, products.getIdProduttore());
        ps.setFloat( 3, products.getPrezzo());
        ps.setInt( 4, products.getIdCategorie());
        ps.setString( 5, products.getDescrizione());
        ps.setString( 6, products.getMisure());
        ps.setFloat( 7, products.getPeso());
        ps.setString( 8, products.getColore());
        ps.setString( 9, products.getPathImmagini());
        ps.setDate( 10, products.getDataInizioValidita());
        ps.setDate( 11, products.getDateFineValidita());
        ps.setInt( 12, products.getId());

        ps.executeUpdate();

        con.close();
    }

    @Override
    public void delete(Prodotto products) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id = ?");
        ps.setInt(1, products.getId());
        ps.executeUpdate();
        con.close();
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }

    @Override
    public String getColumns() {
        return "(idProdotto, nome, idProduttore, prezzo, idCategorie, descrizione, misure, peso, colore, pathImmagini, dataInizioValidita, dataFineValidita)";
    }

    @Override
    public Prodotto fromResultSetToBean(ResultSet rs) throws SQLException {
        Prodotto products = new Prodotto(
                rs.getInt(1),
                rs.getString(2),
                rs.getInt(3),
                rs.getFloat(4),
                rs.getInt(5),
                rs.getString(6),
                rs.getString(7),
                rs.getFloat(8),
                rs.getString(9),
                rs.getString(10),
                rs.getDate(11),
                rs.getDate(12));
        return products;
    }
}