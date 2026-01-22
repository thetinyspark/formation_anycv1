import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  public async launch(): Promise<void> {
    
    try{
      const rand1 = await this.getRandomNumber();
      console.log(`Random numbers: ${rand1}`);
      const rand2 = await this.getRandomNumber();
      console.log(`Random numbers: ${rand1}, ${rand2}`);
    }
    catch(err){
      console.error('Error obtaining random numbers', err);
    }
    
    // permet de créer une promesse auto résolue à partie d'une valeur synchrone
    const num = await Promise.resolve(42);
    console.log(`The answer is: ${num}`);

    // permet de fusionner plusieurs promesses en une seule et d'attendre leur résolution
    const nums = await Promise.all([this.getRandomNumber(), Promise.resolve(666), this.getRandomNumber()]);
    console.log(nums);
  }


  private getRandomNumber(): Promise<number> {
    const p1 = new Promise<number>(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(Math.random());
          }, 
          1000
        );
      }
    );
    return p1;
  }
}
