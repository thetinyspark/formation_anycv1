import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';

const routeConfig: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    title: 'Catalog'
  }
];

export default routeConfig;
