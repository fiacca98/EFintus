package com.lynx.EFintus.commercio.classes;

public class Fattura {

    private int _Id;
    private int _Id_ordine;
    private String _Metodo_pagamento;

    public Fattura(int Id,
                   int Id_ordine,
                   String Metodo_pagamento) {
        this._Id = Id;
        this._Id_ordine = Id_ordine;
        this._Metodo_pagamento = Metodo_pagamento;
    }

    public int get_Id() {
        return _Id;
    }

    public void set_Id(int _Id) {
        this._Id = _Id;
    }

    public int get_Id_ordine() {
        return _Id_ordine;
    }

    public void set_Id_ordine(int _Id_ordine) {
        this._Id_ordine = _Id_ordine;
    }

    public String get_Metodo_pagamento() {
        return _Metodo_pagamento;
    }

    public void set_Metodo_pagamento(String _Metodo_pagamento) {
        this._Metodo_pagamento = _Metodo_pagamento;
    }
}
