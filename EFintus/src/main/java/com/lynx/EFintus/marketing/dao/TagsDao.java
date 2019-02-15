package com.lynx.EFintus.marketing.dao;

import com.lynx.EFintus.marketing.classes.Tags;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TagsDao extends GenericDao<Tags> {

    private String TABLE_NAME = "tag";


    @Override
    public String getTableName() {
        return TABLE_NAME;
    }

    @Override
    public String getColumns() {
        return "(nome)";
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
        List<Tags> tagsList = this.getAll();
        if(!tagsList.contains(tags)){
            PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?)");
            ps.setString(1, tags.getNome());
            ps.executeUpdate();
        }
        con.close();
    }

    @Override
    public void update(Tags tags) throws SQLException {
    }

    @Override
    public void delete(Tags tags) throws SQLException {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where id = ?");
        ps.setString(1, tags.getNome());
        ps.executeUpdate();

        con.close();
    }

    @Override
    public Tags fromResultSetToBean(ResultSet t) throws SQLException {
        Tags tag = new Tags(t.getString(1));
        return tag;
    }
}
