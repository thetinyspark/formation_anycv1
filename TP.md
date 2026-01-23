# TP n°13

- Créez un service nommé LoadingService qui expose 
un signal nommé "loadingPercentage" qui est donc un signal de number. 

- Dans LoadingComponent, changez le type de la propriété publique 
percentage et liez là à ce signal "loadingPercentage"


- Puis dans le ProductService, faites-vous injecter le LoadingService et manipulez la valeur de "loadingPercentage". 
De sorte à ce qu'elle soit au dessus de 0 le temps du chargement 
et à 100 lorsque le chargement est terminé.


