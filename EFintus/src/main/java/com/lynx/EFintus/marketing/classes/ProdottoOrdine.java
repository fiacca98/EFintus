package com.lynx.EFintus.marketing.classes;

public class ProdottoOrdine {

	private int idProdotto;
	private int idOrdine;
	private int quantit�;
	
	public ProdottoOrdine(int idProdotto, int idOrdine, int quantit�) {
		super();
		this.idProdotto = idProdotto;
		this.idOrdine = idOrdine;
		this.quantit� = quantit�;
	}


	public int getIdProdotto() {
		return idProdotto;
	}


	public void setIdProdotto(int idProdotto) {
		this.idProdotto = idProdotto;
	}


	public int getIdOrdine() {
		return idOrdine;
	}


	public void setIdOrdine(int idOrdine) {
		this.idOrdine = idOrdine;
	}


	public int getQuantit�() {
		return quantit�;
	}


	public void setQuantit�(int quantit�) {
		this.quantit� = quantit�;
	}
	
	
	
}
