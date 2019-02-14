package com.lynx.EFintus.commercio.classes;

public class Tags {

    private int _ID;
    private String _Nome;

    public Tags(int ID,
                String Nome) {
        this._ID = ID;
        this._Nome = Nome;
    }

    public int get_ID() {
        return _ID;
    }

    public void set_ID(int _ID) {
        this._ID = _ID;
    }

    public String get_Nome() {
        return _Nome;
    }

    public void set_Nome(String _Nome) {
        this._Nome = _Nome;
    }
}
