package com.lynx.EFintus.logistica.Utility;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;


public class Em {


    private final static EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("com.lynx.EFintus");

    public static EntityManager createEntityManager(){
        return entityManagerFactory.createEntityManager();
    }



    public static void closeEntityManager(EntityManager em){
        em.close();
        entityManagerFactory.close();
    }



}
