package com.lynx.EFintus.marketing.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.marketing.classes.ProdottoEvento;

public class ProdottoEventoDao extends GenericDao<ProdottoEvento> {

	private String TABLE_NAME = "prodotto_evento";

	public ProdottoEvento getByName(String name) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
		ResultSet rs = ps.executeQuery();
		ProdottoEvento prodottoEvento = this.fromResultSetToBean(rs);
		con.close();
		return prodottoEvento;
	}

	@Override
	public List<ProdottoEvento> getAll() throws SQLException {
		List<ProdottoEvento> prodottoEvento = new ArrayList<ProdottoEvento>();

		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
		ResultSet rs = ps.executeQuery();
		while (rs.next()) {
			prodottoEvento.add(this.fromResultSetToBean(rs));
		}

		con.close();

		return prodottoEvento;
	}

	@Override
	public void save(ProdottoEvento prodottoEvento) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?),(?)");

		ps.setInt(1, prodottoEvento.getIdProdotto());
		ps.setInt(2, prodottoEvento.getIdEvento());
		ps.executeUpdate();

		con.close();

	}

	@Override
	public void update(ProdottoEvento prodottoEvento) throws SQLException {

		// Not implemented

	}

	@Override
	public void delete(ProdottoEvento prodottoEvento) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con
				.prepareStatement("delete from " + getTableName() + " where idProdotto = ? AND idEvento = ?");
		ps.setInt(1, prodottoEvento.getIdProdotto());
		ps.setInt(1, prodottoEvento.getIdEvento());
		ps.executeUpdate();
		con.close();
	}

	@Override
	public ProdottoEvento fromResultSetToBean(ResultSet rs) throws SQLException {
		ProdottoEvento prodottoEvento = new ProdottoEvento(rs.getInt(1), rs.getInt(2));
		return prodottoEvento;
	}

	@Override
	public String getTableName() {
		return TABLE_NAME;
	}

	@Override
	public String getColumns() {
		return ("idProdotto,idEvento");
	}

}
