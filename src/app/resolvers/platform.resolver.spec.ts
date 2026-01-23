import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { platformResolver } from './platform.resolver';
import { Signal } from '@angular/core';

describe('platformResolver', () => {
  const executeResolver: ResolveFn<Signal<string[]>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => platformResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
