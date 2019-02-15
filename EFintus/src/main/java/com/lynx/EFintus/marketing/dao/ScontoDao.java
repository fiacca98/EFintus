package com.lynx.EFintus.marketing.dao;

import com.lynx.EFintus.marketing.classes.Sconto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ScontoDao extends GenericDao<Sconto> {
    private String TABLE_NAME = "sconto";

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }

    @Override
    public String getColumns() {
        return "(percentuale, commento)";
    }

    public Sconto getScontoById(int id) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + "where id = " + id);
        ResultSet rs = ps.executeQuery();
        con.close();
        return fromResultSetToBean(rs);
    }

    @Override
    public List<Sconto> getAll() throws SQLException {
        List<Sconto> sconti = new ArrayList<Sconto>();
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
        ResultSet rs = ps.executeQuery();
        while(rs.next()) {
            sconti.add(this.fromResultSetToBean(rs));
        }
        con.close();
        return sconti;
    }

    @Override
    public void save(Sconto sconto) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("insert into " + getTableName()+ " values (?,?)");
        ps.setInt(1, sconto.getPercentuale());
        ps.setString(2, sconto.getCommento());
        ps.executeUpdate();

        con.close();
    }

    @Override
    public void update(Sconto sconto) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set percentuale = ?, commento = ? where id = ?");
        ps.setInt(1, sconto.getPercentuale());
        ps.setString(2, sconto.getCommento());
        ps.setInt(3, sconto.getIdSconto());
        ps.executeUpdate();

        con.close();

    }

    @Override
    public void delete(Sconto sconto) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id = ?");
        ps.setInt(1, sconto.getIdSconto());
        ps.executeUpdate();

        con.close();
    }

    @Override
    public Sconto fromResultSetToBean(ResultSet t) throws SQLException {
        Sconto sconto = new Sconto(t.getInt(1), t.getInt(2), t.getString(3));
        return sconto;
    }
}
