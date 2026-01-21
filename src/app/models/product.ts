export class Product {
    public id:number;
    public name:string;
    public price:number;
    public description:string;
    public img:string;

    constructor(
        id:number, 
        name:string, 
        price:number, 
        description:string, 
        img:string
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }
}

export const PRODUCTS: Product[] = [
    {
        "id": 1,
        "name": "Call Of Duty",
        "price": 79.99,
        "description": "A FPS game.", 
        "img": "./assets/img/cod.jpg"
    },
    {
        "id": 2,
        "name": "Tetris",
        "price": 29.99,
        "description": "A classic puzzle game.", 
        "img": "./assets/img/tetris.jpg"
    },
    {
        "id": 3,
        "name": "Mario Bros 3",
        "price": 9.99,
        "description": "A platform game.", 
        "img": "./assets/img/mario.png"
    }
];