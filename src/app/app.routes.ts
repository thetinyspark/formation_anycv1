import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { cartNotEmptyGuard } from './guards/cart-not-empty.guard';
import { isConnectedGuardGuard } from './guards/is-connected-guard.guard';
import { productResolver } from './resolvers/product.resolver';
import { cartResolver } from './resolvers/cart.resolver';
import { platformResolver } from './resolvers/platform.resolver';
import { LoginComponent } from './components/login/login.component';

const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'login',
    // component: LoginComponent,
    loadComponent: async ():Promise<any> =>{
      const module = await import('./components/login/login.component');
      return module.LoginComponent;
    },
    title: 'Login'
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'Catalog', 
    resolve: {
      products: productResolver, 
      platforms: platformResolver
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart', 
    canActivate: [cartNotEmptyGuard, isConnectedGuardGuard], 
    resolve: {
      cart: cartResolver
    }
  },
];

export default routeConfig;
