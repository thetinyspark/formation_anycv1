export class Product {
  public id: number = -1;
  public name: string = '';
  public price: number = 0;
  public description: string = '';
  public img: string = '';
  public platform: string = '';
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Call Of Duty',
    price: 79.99,
    description: 'A FPS game.',
    img: './assets/img/cod.jpg',
    platform: 'PC',
  },
  {
    id: 2,
    name: 'Tetris',
    price: 29.99,
    description: 'A classic puzzle game.',
    img: './assets/img/tetris.jpg',
    platform: 'Game Boy',
  },
  {
    id: 3,
    name: 'Mario Bros 3',
    price: 9.99,
    description: 'A platform game.',
    img: './assets/img/mario.png',
    platform: 'NES',
  },
  {
    id: 4,
    name: 'Call Of Duty',
    price: 59.99,
    description: 'A FPS game.',
    img: './assets/img/cod.jpg',
    platform: 'Switch',
  },
  {
    id: 5,
    name: 'Mario Kart',
    price: 25.00,
    description: 'A FPS game.',
    img: './assets/img/kart.png',
    platform: 'N64',
  },
];
