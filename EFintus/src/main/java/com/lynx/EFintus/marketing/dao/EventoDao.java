package com.lynx.EFintus.marketing.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.marketing.classes.Evento;

public class EventoDao extends GenericDao<Evento>{

	private String TABLE_NAME = "evento";

    public Evento getById(int id) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + " where idEvento = ?");
	ps.setInt(1, id);
	ResultSet rs = ps.executeQuery();
	con.close();
	return fromResultSetToBean(rs);
    }

    @Override
    public List<Evento> getAll() throws SQLException {
	List<Evento> evento = new ArrayList<Evento>();

	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
	ResultSet rs = ps.executeQuery();
	while (rs.next()) {
	    evento.add(this.fromResultSetToBean(rs));
	}
	con.close();

	return evento;
    }

    @Override
    public void save(Evento evento) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?,?,?)");
	
	ps.setString(1, evento.getNome());
	ps.setDate(2, evento.getDataInizio());
	ps.setDate(3, evento.getDataInizio());

	ps.executeUpdate();

	con.close();

    }

    @Override
    public void update(Evento evento) throws SQLException {

	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set nome=?, dataInizio=?, dataFine=? WHERE idEvento=?");
	ps.setString(1, evento.getNome());
	ps.setDate(2, evento.getDataInizio());
	ps.setDate(3, evento.getDataFine());
	ps.setInt(4, evento.getId());
	ps.executeUpdate();

	con.close();

    }

    @Override
    public void delete(Evento evento) throws SQLException {
	Connection con = getConnection();
	PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where idEvento = ?");
	ps.setInt(1, evento.getId());
	ps.executeUpdate();
	con.close();

    }

    @Override
    public Evento fromResultSetToBean(ResultSet rs) throws SQLException {
    Evento evento = new Evento (rs.getInt(1), rs.getString(2), rs.getDate(3), rs.getDate(4));
	return evento;
    }

    @Override
    public String getTableName() {
	return TABLE_NAME;
    }

    @Override
    public String getColumns() {
	return "(nome , dataInizio, dataFine)";
    }
}
