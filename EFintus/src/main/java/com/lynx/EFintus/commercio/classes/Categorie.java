package com.lynx.EFintus.commercio.classes;

public class Categorie {

    public int _ID;
    public String _nome;
    public int _parentID;

    public Categorie(int ID,
                     String nome,
                     int parentID) {
        this._ID = ID;
        this._nome = nome;
        this._parentID = parentID;
    }
}
