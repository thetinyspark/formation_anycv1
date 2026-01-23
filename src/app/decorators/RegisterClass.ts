type Constructable<T> = new (...args: any[]) => T;

const allClazz:any[] = [];

export function RegisterClass<T>(metadata:any){
    return function (target:Constructable<T>){
        // on stocke la classe dans allClazz
        // c'est juste une démo pour montrer que l'on peut 
        // appliquer un traitement sur une classe avec un decorator
        allClazz.push({target, metadata});
        console.log(allClazz);
    }
}