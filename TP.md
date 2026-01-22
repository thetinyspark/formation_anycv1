# TP n°9


Ajouter des boutons au catalog.component.html permettant d'augmenter / diminuer le prix HT. 
Observez la réaction du computed. 




# TP n°10

- Modifier le ProductService avec des signaux. 
- Créez un signal products contenant l'ensemble des produits
- Mettez à jour les produits en invoquant une fonction refresh() qui mettra à jour 
la valeur du signal<Product[]>. Cette mise à jour doit s'effectuer  toutes les secondes 
(elle doit donc être gérée en interne au sein du service, on ne doit pas la délencher depuis l'exétérieur)
- Utilisez le signal<Product[]> directement dans le composant catalog.component
