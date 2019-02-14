package com.lynx.EFintus.commercio.dao;

import com.lynx.EFintus.commercio.classes.Tags;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TagsDao extends GenericDao<Tags> {

    private String TABLE_NAME = "tags";

    public Tags getById(int id) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName() + " where id = ?");
        ps.setInt(1, id);
        ResultSet rs = ps.executeQuery();
        con.close();
        return fromResultSetToBean(rs);

    }

    @Override
    public List<Tags> getAll() throws SQLException {
        List<Tags> tags = new ArrayList<Tags>();

        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
        ResultSet rs = ps.executeQuery();
        while (rs.next()) {
            tags.add(this.fromResultSetToBean(rs));
        }

        con.close();

        return tags;

    }

    @Override
    public void save(Tags tags) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con
                .prepareStatement("insert into " + getTableAndColumns() + " values (?)");

        ps.setString(1, tags.get_Nome());

        int status = ps.executeUpdate();

        con.close();
    }

    @Override
    public void update(Tags tags) throws SQLException {

        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("update " + getTableName() + " set Utente=? WHERE id=?");
        ps.setString(1, tags.get_Nome());
        ps.setInt(2, tags.get_ID());

        ps.executeUpdate();

        con.close();
    }

    @Override
    public void delete(Tags tags) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id = ?");
        ps.setInt(1, tags.get_ID());
        ps.executeUpdate();
        con.close();
    }

    @Override
    public String getTableName() {
        return TABLE_NAME;
    }

    @Override
    public String getColumns() {
        return "(Nome)";
    }

    @Override
    public Tags fromResultSetToBean(ResultSet rs) throws SQLException {
        Tags tags = new Tags(rs.getInt(1), rs.getString(2));
        return tags;
    }
}
