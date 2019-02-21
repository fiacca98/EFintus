package com.lynx.EFintus.marketing.dao;


  import java.sql.Connection;
  import java.sql.PreparedStatement;
  import java.sql.ResultSet;
  import java.sql.SQLException;
  import java.util.ArrayList;
  import java.util.List;
  import com.lynx.EFintus.marketing.classes.TagProdotto;

  public class TagProdottoDao  extends GenericDao<TagProdotto> {

      private String TABLE_NAME = "tag_prodotto";

      public TagProdotto getByName(String name) throws SQLException {
    Connection con = getConnection();
    PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
    ResultSet rs = ps.executeQuery();
    TagProdotto tagProdotto = this.fromResultSetToBean(rs);
    con.close();
    return tagProdotto;
      }

      @Override
      public List<TagProdotto> getAll() throws SQLException {
    List<TagProdotto> tagProdotto = new ArrayList<TagProdotto>();

    Connection con = getConnection();
    PreparedStatement ps = con.prepareStatement("select * from " + getTableName());
    ResultSet rs = ps.executeQuery();
    while (rs.next()) {
      tagProdotto.add(this.fromResultSetToBean(rs));
    }

    con.close();

    return tagProdotto;
      }

      @Override
      public void save(TagProdotto tagProdotto) throws SQLException {
    Connection con = getConnection();
    PreparedStatement ps = con.prepareStatement("insert into " + getTableAndColumns() + " values (?),(?)");

    ps.setInt(1, tagProdotto.getNome());
    ps.setInt(2, tagProdotto.getIdProdotto());

    ps.executeUpdate();

    con.close();

      }

      @Override
      public void update(TagProdotto tagProdotto) throws SQLException {

    // Not implemented

      }

      @Override
      public void delete(TagProdotto tagProdotto) throws SQLException {
    Connection con = getConnection();
    PreparedStatement ps = con.prepareStatement("delete from " + getTableName() + " where nome = ? AND idProdotto = ?");
    ps.setInt(1, tagProdotto.getNome());
    ps.setInt(1, tagProdotto.getIdProdotto());
    ps.executeUpdate();
    con.close();
      }

      @Override
      public TagProdotto fromResultSetToBean(ResultSet rs) throws SQLException {
    TagProdotto tagProdotto = new TagProdotto(rs.getInt(1),rs.getInt(2));
    return tagProdotto;
      }

      @Override
      public String getTableName() {
    return TABLE_NAME;
      }

      @Override
      public String getColumns() {
    return ("nome,idProdotto");
      }

  }


