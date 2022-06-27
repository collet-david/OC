# Notes cours de Javascript

## Variables

### Déclaration

```JS
let maVariable;
maVariable = 6;

var maVariable2;
```


### Maths : 

```Js
truc = truc + 4;
//Identique
truc+=4;

truc-=4; // - 4
truc *=2; // x 2
truc /=2; // / 2
```

### Pour incrémenter de +1 ou -1 : 

```JS
truc++; //+1
truc--; // -1
```

### Concaténer : 

```JS
let var1="Bonjour";
let var2='Coucou';
let nom="David";
let texte;

texte = var1 + " " + nom; //Bonjour David

texte = "Hello ${nom} !"; // identique
texte = "Hello " + nom + " !";  
```

### objets : 

```js
let monObjet = {
    title: "Titre de l'objet",
    author: "Moi",
    numberOfPages: 250,
    isAvailable: true
};

monObjet.author // pour sortir un attribut de l'objet
monObjet["author"] // identique, mais "author" peut etre une autre variable
```

### Class : 

```js
class Book {
    constructor(title, author, pages) { //modèle de la class
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
```
### Pour créer un nouvel élément : 

 ```js

 let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);
 ```

 ### Tableau : 

 ```js
 let guests = [];

 let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];

 let firstGuest = guests[0]; // "Sarah Kate"
let thirdGuest = guests[2]; // "Will Alexander"
let undefinedGuest = guests[12] // undefined
 ```

Attention la ligne 1 du tableau c'est [0]. 

### Actions sur tableau : 

```js
let monTableau = ["truc","machin","autre truc"];
monTableau.length; // longueur
monTableau.push("coucou"); // ajoute "coucou" à la fin de notre tableau
monTableau.unshift("hey");// ajoute "hey" au début du tableau
monTableau.pop(); // supprimer le dernier item du tableau
```

## Conditions

```js
if (myBoolean) {
// réaction à la valeur vraie de myBoolean
} else {
// réaction à la valeur faux de myBoolean
}
```

* <  inférieur à
* <=   inférieur ou égal à 
* ==   égal à 
* \>=   supérieur ou égal à 
* \>   supérieur à 
* !=   différent de

Il y a deux façons de vérifier si deux valeurs sont égales en JavaScript :  ==  et  ===, aussi appelées égalité simple et égalité stricte :

l'égalité simple vérifie la valeur, mais pas le type. 

```js 
5 == "5"; //true
```

par contre, l'égalité stricte vérifie à la fois la valeur et le type.

```js 
5 === "5"; //false 
```


De même, il y a deux opérateurs d'inégalité,   !=  et   !==  , avec la même distinction.

```js 

&&  // ET logique – pour vérifier si deux conditions sont toutes les deux vraies ;

||  // OU logique – pour vérifier si au moins une condition est vraie ;

!   // NON logique – pour vérifier si une condition n'est pas vraie. 

```

