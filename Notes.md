# Notes cours de Javascript

## Variables

### Déclaration

```JS
let maVariable;
maVariable = 6;

var maVariable2;

const maConstante; //constante
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

&&  // ET logique – pour vérifier si deux conditions sont toutes les deux vraies 

||  // OU logique – pour vérifier si au moins une condition est vraie 

!   // NON logique – pour vérifier si une condition n'est pas vraie. 

```

```js
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};


switch (firstUser.accountLevel) {
case 'normal':
      console.log('You have a normal account!');

break;
case 'premium':
      console.log('You have a premium account!');

break;
case 'mega-premium':
      console.log('You have a mega premium account!');
break;

default:
      console.log('Unknown account type!');
}

// idem que 

if (firstUser.accountLevel === 'normal' ) {
      console.log('You have a normal account!');
} else if (firstUser.accountLevel === 'premium' ) {
      console.log('You have a premium account!');
} else if (firstUser.accountLevel === 'mega-premium' ) {
      console.log('You have a mega premium account!');
}  else {
      console.log('Unknown account type!');
}
```

## Boucles

```js
const variable = 10;
for (let i = 0; i < variable; i++) {
   console.log("");
}
```

### For...in

```js
const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
   console.log("Embarquement du passager " + passengers[i]);
}
```

###  For...of

```js
const passengers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
]

for (let passenger of passengers) {
   console.log("Embarquement du passager " + passenger);
}
```

### while

```js
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges
```

## Fonctions 

```js 

// On définit la fonction

function afficherDeuxValeurs(valeur1, valeur2) {
      console.log('Première valeur:' + valeur1);
      console.log('Deuxième valeur:' + valeur2);
}

// On exécute la fonction
afficherDeuxValeurs(12, 'Bonjour');

// On obtient dans la console
// > Première valeur:12 
// > Deuxième valeur:Bonjour 
```

## Méthodes

Exemple de base : 

```js
class BankAccount {
   constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
   }
} 

const newAccount = new BankAccount("Will Alexander", 500);
```
On peut rajouter des "options" sur la class

```js 

class BankAccount {
   constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
   }
   showBalance() {
      console.log("Solde: " + this.balance + " EUR");
   }
}
```

donc on peut faire : 

```js
newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console
```

on peut complexifier : 

```js
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
    
    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
                 console.log("Retrait refusé !");
        } else {
            console.log("Retrait de " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}
```

on peux faire des registre de fonctions

```js
class BePolite {
    
    static sayHello() {
        console.log("Hello!");
    }
    
    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }
    
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // imprime "Hello!""

BePolite.sayHelloTo("Will"); // imprime "Hello Will!""

const sum = BePolite.add(2, 3); // sum = 5
```

>Toutes ces fonctionnalités pourraient être des fonctions, mais l'avantage d'utiliser des méthodes de classe statiques est par exemple de pouvoir les regrouper par catégorie ou par type.

