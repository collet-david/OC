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


