package com.lynx.EFintus.commercio.classes;

public class Categoria {

    private int _ID;
    private String _nome;
    private int _parentID;

    public Categoria(int ID,
                     String nome,
                     int parentID) {
        this._ID = ID;
        this._nome = nome;
        this._parentID = parentID;
    }

    public int get_ID() {
        return _ID;
    }

    public void set_ID(int _ID) {
        this._ID = _ID;
    }

    public String get_nome() {
        return _nome;
    }

    public void set_nome(String _nome) {
        this._nome = _nome;
    }

    public int get_parentID() {
        return _parentID;
    }

    public void set_parentID(int _parentID) {
        this._parentID = _parentID;
    }
}
