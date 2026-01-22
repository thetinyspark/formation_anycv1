import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { cartNotEmptyGuard } from './guards/cart-not-empty.guard';
import { isConnectedGuardGuard } from './guards/is-connected-guard.guard';

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
    title: 'Cart', 
    canActivate: [cartNotEmptyGuard, isConnectedGuardGuard]
  },
];

export default routeConfig;
