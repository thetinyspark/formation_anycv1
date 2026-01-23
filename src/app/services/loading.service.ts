import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loadingPercentage = signal<number>(0);
  public loadingPercentage = this._loadingPercentage.asReadonly();

  public loadDuring( time:number){
    this._loadingPercentage.set(0);
    const step = time / 100; 
    let interval = setInterval(() => {

      this._loadingPercentage.set( this._loadingPercentage() + 1);
      if( this._loadingPercentage() >= 100)
        clearInterval(interval);

    }, step);
  }
  constructor() { }
}
