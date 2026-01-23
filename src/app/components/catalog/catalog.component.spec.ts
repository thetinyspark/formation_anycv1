import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';
import { signal } from '@angular/core';
import { Product, PRODUCTS } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

fdescribe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  let route = {
    snapshot: {
      data: {
        products: signal<Product[]>(PRODUCTS), 
        platforms: signal<string[]>( PRODUCTS.map( p=>p.platform))
      }
    }
  };

  class FakeHttpClient{
    get<T>(url:string):Observable<any>{
      return of(PRODUCTS);
    }
  }
  
  const http = new FakeHttpClient();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogComponent], 
      providers: [
        {provide: ActivatedRoute, useValue: route},
        {provide: HttpClient, useValue: http},
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some products on it products property (signal)', () => {
    fixture = TestBed.createComponent(CatalogComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.products()).toEqual(PRODUCTS);
  });

  it('should have rendered all products', () => {
    fixture = TestBed.createComponent(CatalogComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();

    // on récupère le résultat du rendu HTML
    const compiled = fixture.nativeElement as HTMLElement;

    // on va chercher tous les produits qui ont été rendus
    const renderedProducts = Array.from( compiled.querySelectorAll('.product') );

    // et on compare la longueur des produits rendus à celle de l'intégralité des produits
    // histoire de vérifier qu'il n'en manque pas.
    expect(renderedProducts.length).toEqual(PRODUCTS.length);
  });
});
