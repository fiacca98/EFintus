import { CategoryBean } from 'src/app/bean/categoryBean';


export const CATEGORY1MOCK :CategoryBean[] = [
    {id: 1, nome: "Categoria 1", parentId: null },
    {id: 2, nome: "Categoria 2", parentId: 1 },
    {id: 3, nome: "Categoria 3", parentId: 1 },
    {id: 4, nome: "Categoria 4", parentId: 1 },
    {id: 5, nome: "Categoria 5", parentId: null },
    {id: 6, nome: "Categoria 6", parentId:5 },
    {id: 7, nome: "Categoria 7", parentId:5 },
    {id: 8, nome: "Categoria 8", parentId:5 },
    {id: 9, nome: "Categoria 9", parentId: null },
    {id: 10, nome: "Categoria 10", parentId: 9 },
    {id: 11, nome: "Categoria 11", parentId: 9 },
    {id: 12, nome: "Categoria 12", parentId: 9 },
    {id: 13, nome: "Categoria 13", parentId: 9 },
    {id: 14, nome: "Categoria 14", parentId: null },
    {id: 15, nome: "Categoria 15", parentId: 14 },
    {id: 16, nome: "Categoria 16", parentId: 14},
    {id: 17, nome: "Categoria 17", parentId: 14},
    {id: 18, nome: "Categoria 18", parentId: null },
    {id: 19, nome: "Categoria 19", parentId: 18},
    {id: 20, nome: "Categoria 20", parentId: 18},
    {id: 21, nome: "Categoria 21", parentId: 18},
]
