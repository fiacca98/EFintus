package com.lynx.EFintus.marketing.classes;

public class TagProdotto {

  private int idTag;

  private int idProdotto;
  
  public TagProdotto(int idTag, int idProdotto) {
   
    this.idTag = idTag;
    this.idProdotto = idProdotto;
  }

  public int getIdTag() {
    return idTag;
  }

  public int getIdProdotto() {
    return idProdotto;
  }

  public void setIdTag(int idTag) {
    this.idTag = idTag;
  }

  public void setIdProdotto(int idProdotto) {
    this.idProdotto = idProdotto;
  }
  
  

}
