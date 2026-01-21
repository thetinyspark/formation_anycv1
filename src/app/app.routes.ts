import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'Catalog'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
];

export default routeConfig;
