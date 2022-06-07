$(document).ready(function(){
   
// amusement pour switch texte

var save;
  
$('.test').hover(function () {
            
            $('.test').css('color','red');
            save = $('.test').text();
            $('.test').text("GERARD MAJAX DISPARITION !!");
                    
        }, function () {
            $('.test').css('color','black');
            $('.test').text(save);

        }
    );

// tentative de calcul moyenne live

let nombres = [];

$('#formdetest').submit(function(e) {
    e.preventDefault();

    var nombre = $('#nombreform').val();

// si rien aucune entrée, considère que 0
 if(nombre === ''){
    nombre=0 ;
    }
    else{
    nombre = parseFloat($('#nombreform').val());
    // on le transforme en nombre
    }

nombres.push(nombre); 

let nb = 0;
for (i=0;i<nombres.length;i++){
nb+=nombres[i];

}
let moyenne = nb/nombres.length;


$('#return').text('La moyenne est de ' + moyenne + '.');

$('#listeNombre').text("");
$('#listeNombre').append(afficherContenuTableauEnListe(nombres));


});

// Exo anniversaire

$('#boutonAnniv').click(function () { 
    
    $('#anniv1').append("<p>BON ANNIVERSAIRE ! </p>");
    $('#boutonAnniv').remove();
});



$('#anniv1').click(function(){

$('#anniv2').append("<p> Et con cadeau ? </p>");
$('#anniv1').remove();

});

$('#anniv3').click(function(){

    $('#anniv3').append("<p> TADA </p>");
    $('h1').css("color", "red");
    $('#anniv2').remove();
    
    });



});


// Partie fonction

function afficherContenuTableauEnListe(tab){
    let code = "";
    
        for(let i=0;i<tab.length;i++){
    
                    
            code += "<p>Le nombre placé en posisiton "+ i +" du tableau est :  " + tab[i] + ". </p>";
         
    
        }

    return code;
    
    
    }













