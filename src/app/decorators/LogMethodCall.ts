export function LogMethodCall(
    target: any, 
    propertyKey:string, 
    descriptor: PropertyDescriptor
){
    // on récupère la référence à la fonction
    const func = descriptor.value;

    // on va changer notre fonction pour y ajouter un log à chaque fois 
    // qu'elle est appellée 
    descriptor.value = function(...args:any[]){
        console.log("Appel à la fonction "+propertyKey+" avec les arguments suivants: ", args);
        return func.apply(this,args);
    }
}