export class Navbar{
    id: number;
    name: string;
    link: string;
    dropdowns: Navbar[];
    
    public constructor(id: number, name: string, link:string, dropdowns: Navbar[]){
        this.id = id;
        this.name = name;
        this.link = link;
        this.dropdowns = dropdowns;
    }
    
}