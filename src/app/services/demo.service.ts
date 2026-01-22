import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of, ReplaySubject, Subject } from 'rxjs';

type UserInfo1 = {name:string, age:number};
type UserInfo2 = {name:string, sex:string};
type UserInfo3 = {name:string, sex:string, age:number};

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  public async launch(): Promise<void> {
    /*
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
    
    const users = await this.getUserInfo();
    console.log(users);
    */

    // of(45).subscribe(
    //   (value)=>{
    //     console.log(`Observable value: ${value}`);
    //   }
    // );

    // const obs = new Observable<number>(
    //   (subscriber)=>{
    //     let interval = setInterval(
    //       ()=>{
    //         subscriber.next(Math.floor(Math.random()*100));
    //         // subscriber.next(30);
    //         // subscriber.complete();
    //       },
    //       100
    //     );

    //     // cette fonction est déclenchée lors de la désinscription à l'observable
    //     // elle permet de faire du nettoyage
    //     return ()=>{
    //       clearInterval(interval);
    //       console.log('Observable cleaned up');
    //     };

    //   }
    // );

    // const p1 = firstValueFrom(obs);
    // const firstValue = await p1;
    // console.log(`First observable value: ${firstValue}`);

    // const sub = obs.subscribe(
    //   {
    //     next: (value)=>console.log(`Observable value: ${value}`),
    //     error: (err)=>console.error('Observable error:', err),
    //     complete: ()=>{ console.log('Observable completed');}
    //   }
    // );

    // setTimeout(
    //   ()=>{
    //     sub.unsubscribe();
    //     console.log('Unsubscribed from observable');
    //   },
    //   1000
    // );




    const prices:number[] = [];
    const tvas:number[] = [];


    const pricesObs = new ReplaySubject<number>();
    const tvaObs = new ReplaySubject<number>();

    function calcLastPrice(){
      const price = prices[prices.length -1] || 0;
      const tva = tvas[tvas.length -1] || 0;

      console.log("Dernier prix TTC: ", price + (price * tva / 100) );
    }


    setInterval(
      ()=>{
        pricesObs.next( Math.round( Math.random()*100) );  
        tvaObs.next( Math.round( Math.random()*20) );
      }, 500
    );

    pricesObs.subscribe((price)=> { prices.push(price); calcLastPrice(); } );
    tvaObs.subscribe((tva)=> { tvas.push(tva); calcLastPrice(); } );
  }

  private async getUserInfo(): Promise<UserInfo3[]>{
    const userInfos1 = await this.getUserInfo1();
    const userInfos2 = await this.getUserInfo2();

    const results:UserInfo3[] = userInfos1.map(
      (currentUserInfo1)=>{
        const info2 = userInfos2.find( info => info.name === currentUserInfo1.name ) || null;
        if(info2 == null) {
          return {
            name: currentUserInfo1.name,
            age: currentUserInfo1.age, 
            sex: 'unknown'
          }
        }
        else{
          return {
            name: currentUserInfo1.name,
            age: currentUserInfo1.age, 
            sex: info2.sex
          }
        }
      }
    );

    return results;
  }

  private getUserInfo1(): Promise<UserInfo1[]>{
    return Promise.resolve([
      {name: 'Alice', age: 30},
      {name: 'Bob', age: 25},
      {name: 'Charlie', age: 35}  
    ]);
  }

  private getUserInfo2(): Promise<UserInfo2[]>{
    return Promise.resolve([
      {name: 'Alice', sex: 'female'},
      {name: 'Bob', sex: 'male'},
      {name: 'Charlie', sex: 'male'}  
    ]);
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
