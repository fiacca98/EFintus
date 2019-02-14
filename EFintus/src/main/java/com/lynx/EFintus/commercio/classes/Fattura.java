package com.lynx.EFintus.commercio.classes;

public class Fattura {

    public int _Id;
    public int _Id_ordine;
    public String _Metodo_pagamento;

    public Fattura(int Id,
                   int Id_ordine,
                   String Metodo_pagamento) {
        this._Id = Id;
        this._Id_ordine = Id_ordine;
        this._Metodo_pagamento = Metodo_pagamento;
    }
}
