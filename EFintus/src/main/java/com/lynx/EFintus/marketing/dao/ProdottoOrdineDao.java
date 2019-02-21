package com.lynx.EFintus.marketing.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lynx.EFintus.marketing.classes.ProdottoOrdine;

public class ProdottoOrdineDao extends GenericDao<ProdottoOrdine> {

	private String TABLE_NAME = "prodotto_ordine";

	public ProdottoOrdine getByName(String name) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
		ResultSet rs = ps.executeQuery();
		ProdottoOrdine prodottoOrdine = this.fromResultSetToBean(rs);
		con.close();
		return prodottoOrdine;
	}

	@Override
	public List<ProdottoOrdine> getAll() throws SQLException {
		List<ProdottoOrdine> prodottoOrdine = new ArrayList<ProdottoOrdine>();

		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
		ResultSet rs = ps.executeQuery();
		while (rs.next()) {
			prodottoOrdine.add(this.fromResultSetToBean(rs));
		}

		con.close();

		return prodottoOrdine;
	}

	@Override
	public void save(ProdottoOrdine prodottoOrdine) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?),(?),(?)");

		ps.setInt(1, prodottoOrdine.getIdProdotto());
		ps.setInt(2, prodottoOrdine.getIdOrdine());
		ps.setInt(2, prodottoOrdine.getQuantità());

		ps.executeUpdate();

		con.close();

	}

	@Override
	public void update(ProdottoOrdine prodottoOrdine) throws SQLException {

		// Not implemented

	}

	@Override
	public void delete(ProdottoOrdine prodottoOrdine) throws SQLException {
		Connection con = getConnection();
		PreparedStatement ps = con
				.prepareStatement("delete from " + getTableName() + " where idProdotto = ? AND idEvento = ?");
		ps.setInt(1, prodottoOrdine.getIdProdotto());
		ps.setInt(1, prodottoOrdine.getIdOrdine());
		ps.executeUpdate();
		con.close();
	}

	@Override
	public ProdottoOrdine fromResultSetToBean(ResultSet rs) throws SQLException {
		ProdottoOrdine prodottoOrdine = new ProdottoOrdine(rs.getInt(1), rs.getInt(2), rs.getInt(3));
		return prodottoOrdine;
	}

	@Override
	public String getTableName() {
		return TABLE_NAME;
	}

	@Override
	public String getColumns() {
		return ("idProdotto,idEvento,quantità");
	}

}

