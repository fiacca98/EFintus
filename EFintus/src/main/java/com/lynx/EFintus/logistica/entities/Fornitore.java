package com.lynx.EFintus.logistica.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "fornitore")
public class Fornitore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_fornitore")
    private int id;

    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "via", length = 100)
    private String via;

    @Column(name = "citta", length = 100)
    private String citta;

    @Column(name = "n_civico", length = 10)
    private String n_civico;

    @Column(name = "cap", length = 6)
    private String cap;

    @OneToMany(mappedBy = "primaryKey.fornitore", cascade = CascadeType.ALL)
    private List<Fornitura> forniture = new ArrayList<Fornitura>();

    public Fornitore(){}

    public Fornitore(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }


    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = nome;
    }

    public List<Fornitura> getForniture() {
        return forniture;
    }

    public void setForniture(List<Fornitura> forniture) {
        this.forniture = forniture;
    }

    public void addFornitura(Fornitura f){
        forniture.add(f);
    }
}
