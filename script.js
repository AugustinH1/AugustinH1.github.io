var refInfoBulle, refCopier;

var oContenuInfoBulles = {
    "c" : "création de logiciel (ex : logiciel de gestion de livre dans une bibliothèque, projet AVALAM)",
    "html" : "création de site internet(ex : ce CV fait en web)",
    "sql":"création de base de donné et requête SQL"
};

function init(){
    refInfoBulle = document.getElementById("infoBulle");
    refCopier = document.getElementById("copie")

}




function afficher_infobule_body(e) {
    if (oContenuInfoBulles[e.target.id] !== undefined){
  
      refInfoBulle.innerHTML = oContenuInfoBulles[e.target.id];
  
      refInfoBulle.style.top = parseInt(e.clientY) + 10 + "px";
        refInfoBulle.style.left = parseInt(e.clientX) + 10 + "px";
        refInfoBulle.style.display = "block";
    }
    else{
        refInfoBulle.style.display = "none";
    }
}



function copie(e,nb) {

    refCopier.style.top = parseInt(e.clientY) - 60+ "px";
    refCopier.style.left = parseInt(e.clientX) - 25 + "px";
    refCopier.style.display = "block";

    if(nb==1){
    navigator.clipboard.writeText("augustin.husson2@gmail.com");
    }
    if(nb == 2){
        navigator.clipboard.writeText("07 82 12 04 24");
    }
    setTimeout(function(){refCopier.style.display = "none"},1000);
}

