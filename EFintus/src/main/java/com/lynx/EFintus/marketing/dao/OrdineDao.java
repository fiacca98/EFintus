package com.lynx.EFintus.marketing.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.marketing.classes.Ordine;

public class OrdineDao extends GenericDao<Ordine>{

	private String TABLE_NAME = "ordine";

	public Ordine getById(int id) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + " where idOrdine = ?");
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();
		con.close();
		return fromResultSetToBean(rs);
	    }
	
	@Override
	public List<Ordine> getAll() throws SQLException {
		List<Ordine> fattura = new ArrayList<Ordine>();

		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
		ResultSet rs = ps.executeQuery();
		while (rs.next()) {
		    fattura.add(this.fromResultSetToBean(rs));
		}
		con.close();

		return fattura;
	}

	@Override
	public void save(Ordine ordine) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?,?,?)");
		
		ps.setInt(1, ordine.getIdUtente());
		ps.setDate(2, ordine.getDataOrdine());
		ps.setString(3, ordine.getStato());
		ps.executeUpdate();

		con.close();
		
	}

	@Override
	public void update(Ordine ordine) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set idUtente=?, dataOrdine=?, stato=? WHERE idFattura=?");
		ps.setInt(1, ordine.getIdUtente());	
		ps.setDate(2, ordine.getDataOrdine());
		ps.setString(3, ordine.getStato());
		ps.executeUpdate();

		con.close();
		
	}

	@Override
	public void delete(Ordine ordine) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where idOrdine = ?");
		ps.setInt(1, ordine.getId());
		ps.executeUpdate();
		con.close();
	}

	@Override
	public Ordine fromResultSetToBean(ResultSet rs) throws SQLException {
		Ordine ordine = new Ordine (rs.getInt(1), rs.getInt(2), rs.getDate(3), rs.getString(4));
		return ordine;
	}

	@Override
	public String getTableName() {
		return TABLE_NAME;
	}

	@Override
	public String getColumns() {
		return "(idUtente, dataAcquisto, stato)";
	}

}
