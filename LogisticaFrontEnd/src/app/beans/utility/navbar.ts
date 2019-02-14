export class Navbar{
    id: number;
    name: string;
    isDropdown: boolean;
    
    public Navbar(id: number, name: string, isDropdown: boolean){
        this.id = id;
        this.name = name;
        this.isDropdown = isDropdown;
    }
    
}