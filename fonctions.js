

function afficherContenuTableauEnListe(tab){
    let code = "";
    
        for(let i=0;i<tab.length;i++){
    
                    
            code += "<p id=\"tableauNombre"+i+" \">Le nombre placé en posisiton "+ i +" du tableau est :  " + tab[i] + ".</p>";
         
    
        }
    return code;
    
    }

    