package com.lynx.EFintus.commercio.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.commercio.classes.Produttore;

public class ProduttoreDao extends GenericDao<Produttore> {

    private String TABLE_NAME = "produttore";

    @Override
    public Produttore get(int id) throws SQLException {
	return null;
    }

    @Override
    public List<Produttore> getAll() throws SQLException {
	List<Produttore> produttori = new ArrayList<Produttore>();

	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
	ResultSet rs = ps.executeQuery();
	while (rs.next()) {
	    Produttore produttore = new Produttore(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
		    rs.getString(5), rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9));
	    produttori.add(produttore);
	}
	con.close();

	return produttori;
    }

    @Override
    public void save(Produttore produttore) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con
		.prepareStatement("insert into " + getTableAndColumns() + " values (?,?,?,?,?,?,?,?,?)");

	ps.setInt(1, produttore.get_ID());
	ps.setString(2, produttore.get_nome());
	ps.setString(3, produttore.get_indirizzo());
	ps.setString(4, produttore.get_citta());
	ps.setString(5, produttore.get_cap());
	ps.setString(6, produttore.get_telefono());
	ps.setString(7, produttore.get_email());
	ps.setString(8, produttore.get_descrizione());
	ps.setString(9, produttore.get_partitaIVA());

	int status = ps.executeUpdate();

	con.close();
    }

    @Override
    public void update(Produttore produttore) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("update" + getTableName() + "set " + "nome=" + produttore.get_nome()
		+ "indirizzo=" + produttore.get_indirizzo() + "citta=" + produttore.get_citta() + "cap="
		+ produttore.get_cap() + "telefono=" + produttore.get_telefono() + "email=" + produttore.get_email()
		+ "descrizione=" + produttore.get_descrizione() + "partitaIVA=" + produttore.get_partitaIVA());

	int status = ps.executeUpdate();

	con.close();
    }

    @Override
    public void delete(Produttore produttore) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("DELETE FROM" + getTableName() + "WHERE ID=" + produttore.get_ID());

	int status = ps.executeUpdate();

	con.close();
    }

    @Override
    public String getTableName() {
	return TABLE_NAME;
    }

    @Override
    public String getColumns() {
	return "(ID, nome,indirizzo, citta, cap , telefono, email, descrizione, partitaIVA)";
    }

    @Override
    public Produttore fromResultSetToBean(ResultSet t) throws SQLException {
	// TODO Auto-generated method stub
	return null;
    }
}
