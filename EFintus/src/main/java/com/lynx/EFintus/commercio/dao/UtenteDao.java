package com.lynx.EFintus.commercio.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.commercio.classes.Utente;

public class UtenteDao extends GenericDao<Utente> {

    private String TABLE_NAME = "utente";

    @Override
    public Utente get(int id) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + " where id = ?");
	ps.setInt(1, id);
	ResultSet rs = ps.executeQuery();
	return fromResultSetToBean(rs);

    }

    @Override
    public List<Utente> getAll() throws SQLException {
	List<Utente> utenti = new ArrayList<Utente>();

	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
	ResultSet rs = ps.executeQuery();
	while (rs.next()) {
	    utenti.add(this.fromResultSetToBean(rs));
	}
	con.close();

	return utenti;

    }

    @Override
    public void save(Utente utente) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con
		.prepareStatement("insert into " + getTableAndColumns() + " values (?,?,?,?,?,?,?,?,?,?)");

	ps.setString(1, utente.get_Nome());
	ps.setString(2, utente.get_Cognome());
	ps.setString(3, utente.get_Email());
	ps.setString(4, utente.get_Password());
	ps.setString(5, utente.get_Indirizzo());
	ps.setString(6, utente.get_Citta());
	ps.setString(7, utente.get_CAP());
	ps.setString(8, utente.get_Stato());
	ps.setString(9, utente.get_Telefono());
	ps.setString(10, utente.get_PartitaIVA());

	int status = ps.executeUpdate();

	con.close();
    }

    @Override
    public void update(Utente utente, String[] params) {

    }

    @Override
    public void delete(Utente utente) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id = ?");
	ps.setInt(1, utente.get_ID());
	ps.executeUpdate();
    }

    @Override
    public String getTableName() {
	return TABLE_NAME;
    }

    @Override
    public String getColumns() {
	return "(Nome, Cognome, Email, Password, Indirizzo, Città, CAP, Stato, Telefono, PartitaIVA)";
    }

    @Override
    public Utente fromResultSetToBean(ResultSet rs) throws SQLException {
	Utente utente = new Utente(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
		rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), rs.getString(11));
	return utente;
    }

}
